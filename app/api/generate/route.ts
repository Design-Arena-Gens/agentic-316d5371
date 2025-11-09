import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { topic, platform, tone } = await request.json();

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      );
    }

    // Generate content using Claude-like AI logic
    const generatedPost = await generateSocialMediaPost(topic, platform, tone);

    return NextResponse.json(generatedPost);
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}

async function generateSocialMediaPost(
  topic: string,
  platform: string,
  tone: string
) {
  // Platform-specific character limits and styles
  const platformConfig: Record<string, { maxLength: number; style: string }> = {
    twitter: { maxLength: 280, style: 'concise and punchy' },
    linkedin: { maxLength: 1300, style: 'professional and detailed' },
    instagram: { maxLength: 2200, style: 'visual and engaging' },
    facebook: { maxLength: 500, style: 'conversational and relatable' },
  };

  const config = platformConfig[platform] || platformConfig.twitter;

  // Generate content based on tone
  let content = '';
  let hashtags: string[] = [];

  // Simple AI-like content generation (in a real app, this would call OpenAI/Claude API)
  switch (tone) {
    case 'professional':
      content = generateProfessionalContent(topic, platform, config);
      hashtags = generateHashtags(topic, platform, 3);
      break;
    case 'casual':
      content = generateCasualContent(topic, platform, config);
      hashtags = generateHashtags(topic, platform, 4);
      break;
    case 'enthusiastic':
      content = generateEnthusiasticContent(topic, platform, config);
      hashtags = generateHashtags(topic, platform, 5);
      break;
    case 'humorous':
      content = generateHumorousContent(topic, platform, config);
      hashtags = generateHashtags(topic, platform, 3);
      break;
    case 'inspirational':
      content = generateInspirationalContent(topic, platform, config);
      hashtags = generateHashtags(topic, platform, 4);
      break;
    default:
      content = generateProfessionalContent(topic, platform, config);
      hashtags = generateHashtags(topic, platform, 3);
  }

  return {
    platform,
    content,
    hashtags,
  };
}

function generateProfessionalContent(
  topic: string,
  platform: string,
  config: { maxLength: number; style: string }
): string {
  if (platform === 'twitter') {
    return `Excited to share insights on ${topic}. Key takeaway: consistency and quality drive results. What's your experience? 💼`;
  } else if (platform === 'linkedin') {
    return `I wanted to take a moment to discuss ${topic}, which has been a key focus for our team recently.

After considerable research and implementation, we've discovered that the most effective approach involves:

• Strategic planning and clear objectives
• Consistent execution and measurement
• Continuous learning and adaptation

The results speak for themselves, and I believe there's value in sharing these insights with the professional community.

What has been your experience with ${topic}? I'd love to hear your perspective in the comments.`;
  } else if (platform === 'instagram') {
    return `Diving deep into ${topic} today! ✨

Swipe through to see our journey and the incredible results we've achieved. This has been a game-changer for how we approach our work.

The key? Stay focused, stay consistent, and never stop learning.

What's your take on this? Drop a comment below! 👇`;
  } else {
    return `I wanted to share some thoughts on ${topic}. After working on this extensively, I've learned that success comes from careful planning, consistent effort, and a willingness to adapt. Would love to hear your thoughts and experiences!`;
  }
}

function generateCasualContent(
  topic: string,
  platform: string,
  config: { maxLength: number; style: string }
): string {
  if (platform === 'twitter') {
    return `Just spent the day working on ${topic} and honestly? Mind = blown 🤯 Who else is into this?`;
  } else if (platform === 'linkedin') {
    return `So, ${topic} has been on my mind lately...

Not gonna lie, when I first started exploring this, I had no idea what I was getting into. But here's what I've learned:

→ It's way more interesting than I thought
→ The community around it is amazing
→ There's always something new to discover

Anyone else working on something similar? Let's connect!`;
  } else if (platform === 'instagram') {
    return `Real talk about ${topic} 💭

Been working on this for a while now and wanted to share the journey with you all. It's been a wild ride - lots of ups, downs, and everything in between.

But that's what makes it exciting, right?

Who else is on this path? Let's chat! 👋`;
  } else {
    return `Hey everyone! Been diving into ${topic} lately and it's been quite the adventure. Thought I'd share what I've been learning. Anyone else working on something similar? Would love to connect and swap stories!`;
  }
}

function generateEnthusiasticContent(
  topic: string,
  platform: string,
  config: { maxLength: number; style: string }
): string {
  if (platform === 'twitter') {
    return `OMG! Just made a breakthrough with ${topic}! 🚀 This is EXACTLY what I've been working towards! Who's ready to see what's next? 🔥`;
  } else if (platform === 'linkedin') {
    return `I am THRILLED to share what we've been working on with ${topic}! 🎉

This has been an incredible journey, and I couldn't be more excited about where we're headed!

Here's what makes this so special:

✨ Game-changing innovation
✨ Real-world impact
✨ Endless possibilities

The energy around this project has been absolutely electric, and I can't wait to see where it takes us!

Who else is excited about ${topic}? Let's celebrate these wins together! 🚀`;
  } else if (platform === 'instagram') {
    return `THIS IS IT! 🎊✨🚀

Everything we've been working on with ${topic} is finally coming together and I'm beyond excited to share it with you all!

The journey has been INCREDIBLE:
⚡ Amazing discoveries
⚡ Awesome people
⚡ Unforgettable moments

Can't wait to show you what's next! Stay tuned! 🌟

Tag someone who needs to see this! 👇`;
  } else {
    return `I'm so excited to share this! We've been working on ${topic} and the results are absolutely amazing! 🎉 This is the kind of breakthrough that makes all the hard work worth it. Can't wait to see where this journey takes us next! Who's with me?!`;
  }
}

function generateHumorousContent(
  topic: string,
  platform: string,
  config: { maxLength: number; style: string }
): string {
  if (platform === 'twitter') {
    return `Me: I'll just quickly work on ${topic}\n*6 hours later*\nMe: Wait, it's dark outside?\n\nWorth it though 😅`;
  } else if (platform === 'linkedin') {
    return `Let's talk about ${topic} for a second... 😄

You know that moment when you think "this will take 5 minutes" and suddenly it's 3 days later and you're questioning all your life choices?

Yeah, that's been my week.

But here's the thing - somewhere between the coffee-fueled debugging sessions and the "why isn't this working" moments, something magical happened. We actually figured it out!

Turns out ${topic} is like pizza: even when it's bad, it's still pretty good.

Anyone else living this reality? 🍕`;
  } else if (platform === 'instagram') {
    return `POV: You're me trying to explain ${topic} at a party 🤓

Everyone else: *slowly backs away*

But seriously though, this stuff is actually hilarious when you think about it. Like, who decided this was a good idea? Oh wait... that was us 😂

Swipe for the chaos → `;
  } else {
    return `Alright, confession time: I thought ${topic} would be easy. I was wrong. SO wrong. 😅 It's been a rollercoaster of "aha!" moments followed by "wait, what?" moments. But hey, at least we're learning, right? Anyone else feel personally attacked by this? 😂`;
  }
}

function generateInspirationalContent(
  topic: string,
  platform: string,
  config: { maxLength: number; style: string }
): string {
  if (platform === 'twitter') {
    return `Every expert in ${topic} was once a beginner who refused to give up. Your journey starts with a single step. Take it. 💫`;
  } else if (platform === 'linkedin') {
    return `Today, I want to talk about ${topic} and why it matters more than you might think.

When I started this journey, I had doubts. We all do. But here's what I've learned:

🌟 Growth happens outside your comfort zone
🌟 Every challenge is an opportunity to learn
🌟 Your unique perspective adds value
🌟 Progress, not perfection, is the goal

${topic} has taught me that success isn't about being the best immediately. It's about showing up consistently, learning from setbacks, and believing in your vision even when others don't see it yet.

To anyone starting their journey: You have what it takes. Trust the process.

What's one lesson that changed your perspective? Share below - your story might inspire someone else. ⬇️`;
  } else if (platform === 'instagram') {
    return `Your journey with ${topic} is uniquely yours ✨

Remember:
🌅 Every sunrise brings new possibilities
💪 Your courage inspires others
🚀 Small steps lead to big transformations
💫 You're capable of more than you know

Don't compare your chapter 1 to someone else's chapter 20. Focus on your growth, celebrate your wins, and keep moving forward.

The world needs what only you can offer.

Save this for when you need a reminder 💙

Who's ready to take the next step? 👇`;
  } else {
    return `Working on ${topic} has reminded me of something important: every expert was once a beginner, and every success story started with someone who decided not to give up. Your path may be different, but your potential is limitless. Keep going, keep learning, keep believing. You've got this! 💪✨`;
  }
}

function generateHashtags(topic: string, platform: string, count: number): string[] {
  // Extract key words from topic
  const words = topic.toLowerCase().split(' ').filter(word => word.length > 3);
  const baseHashtags = words.slice(0, 2).map(word =>
    `#${word.charAt(0).toUpperCase() + word.slice(1)}`
  );

  // Add platform-specific hashtags
  const commonHashtags: Record<string, string[]> = {
    twitter: ['#Tech', '#Innovation', '#Business', '#Success', '#Growth', '#Tips'],
    linkedin: ['#Professional', '#CareerGrowth', '#Business', '#Leadership', '#Innovation', '#Success'],
    instagram: ['#Inspo', '#Motivation', '#Goals', '#Success', '#Growth', '#Community'],
    facebook: ['#Community', '#Share', '#Connect', '#Life', '#Updates', '#News'],
  };

  const platformHashtags = commonHashtags[platform] || commonHashtags.twitter;
  const additionalHashtags = platformHashtags.slice(0, count - baseHashtags.length);

  return [...baseHashtags, ...additionalHashtags];
}
