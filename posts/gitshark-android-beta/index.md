---
date: "2021-04-28"
title: Announcing GitShark Android Beta
---

GitShark, our Git GUI that allows you to clone and commit from your mobile devices, is launching as a public beta on Android today!

<div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap">



<div style="min-height: 240px; min-width: 240px;">

![Screenshot of GitShark](./android_beta_light.png)

</div>

<a href='https://play.google.com/store/apps/details?id=dev.oceanbit.gitshark&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'  style="min-height: 240px; min-width: 240px;">

![](./get_gitshark_playstore.png)

</a>

</div>

With this release you can clone repos, make changes to files, make a commit right from your phone or tablet and push them back to your repos!

That said, with every release there's nuance to the journey it's taken thus far, what's available and what's still to come. Let's take a look at some of that.



## Initial Use Case

Despite various phrasings, we get the same question a lot: "Why?"

A lot of people don't understand why someone would want to use a Git client on their mobile devices. Let's take a look at the initial use-case that spurred [Corbin](https://crutchcorn.dev) to start development in the first place.

In May 2019, Corbin started the programming blog [Unicorn Utterances](https://unicorn-utterances.com). Wanting to encourage others to write, they decided to [open-source the project](https://github.com/unicorn-utterances/unicorn-utterances/), including the markdown files that are used to render the blog post contents. 

Around that same time, they were traveling a lot for work. While 16" laptops are great for screen real-estate, they're difficult to justify taking out during a plane. The sheer size doesn't conduce a good compact writing environment when seats are close and plane-neighbors are closer. Eventually, Corbin realized that they could use a smaller tablet with a keyboard attachment to make space lesser an issue while writing on the plane.

However, once they got off the plane, they realized they had to manually transfer the relevant files over to a laptop to push them to the Git repo that the blog was hosted on. Further, their iterative writing process was made more difficult without the ability to keep short-term temporary backups that could be rolled-back and managed respectively ala commits.

It was apparent at the time that what was needed was the full Git support they had on their desktop.

Unsatisfied with the available alternatives, Corbin took out to make their own. With mobile computing getting faster and faster every year, and with more and more people migrating to tablets as a major part of their workflow - it seemed to only make sense. We broke ground on GitShark on February 2020.



## Features

Before we take a look at what's upcoming that we have planned for the future, let's look at what can be done in the first Android Beta we're launching today:

- GitHub OAuth login - No manual user tokens required!
- Staging, unstaging
- Committing
- Pulling, push, fetch
- Creating branches
- Switching branches
- Checking out remote branches
- Viewing commit details
- Seeing a Git log for current branch

While we feel that this is a solid enough base to cover some initial usecases, we acknowledge that there's more to add to our app, such as:

- SAF support (support cloning to SD card)

- Branch Merging
- Checking out commits
- Tree view
- Interactive rebasing
- GitLab, BitBucket support
- Diff view

These are all things that we're planning to add before a full non-beta release.


We're not ones to rest on our laurels, however. As this blog post is being launched, our designers are working on revamping our design system to be more prepared for new features and design improvements and our developers are working on adding the branch merging feature we're hoping to include with the next release.

However, there's bound to be features that aren't listed here that you may want to see in the app. We're extremely open-minded and want to hear from you! Please [open a GitHub issue](https://github.com/oceanbit/GitShark/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFEAT%5D+Feature+request) and tell us what you'd like to see!



## Other Platforms

While GitShark Android has seen a closed alpha come and go, and we're announcing an open beta of it today, we have not yet published an iOS closed alpha, nor have we started much development on our desktop versions. Let's walk through the technical reasons for the disjointed development and evaluate how we made the decision to prioritize Android as our first major platform.



### Technical Outline

If you've ever stopped by one of [Corbin's livestreams, where they build GitShark live on Twitch](https://twitch.tv/crutchcorn), you may already know that GitShark's UI is written in React Native. Because of this, many assume that we're able to build our app for iOS and Android at the same time. While this has some merit, GitShark has some reliance on native code that prevents us from being feature-complete between the two platforms day 1.

The biggest reason behind this is our dependency on native code. In GitShark Android, we nearly have 2K lines of code, and we anticipate that number to triple when rewriting to iOS. Why do we have that much native code in our React Native app? Why do we expect our iOS app to contain even more native code? Great questions. Let's start with the first one



#### Why Native in React Native?

When building our MVP of GitShark back in last year, we started with a pure JavaScript implementation of Git called [`isomorphic-git`](http://isomorphic-git.org/). At first glance, this was perfect for us - `isomorphic-git` is well maintained, has an _**extremely**_ helpful creator (Sincerely, thank you so much for all of your help [William](https://twitter.com/wmhilton), GitShark wouldn't've made it without you), and the ability to use [a custom filesystem](https://isomorphic-git.org/docs/en/fs#implementing-your-own-fs). 

This last point is important, because we needed to plug [`react-native-fs`](https://github.com/itinance/react-native-fs)





#### Native Git iOS vs. Native Git Android

### Why Android First?



70% of people who signed up for our mailing list chose "Android" as the platform they were interested in.

iOS tied with Windows at 38%. 

> Some of you may be thinking "70 + 38 > 100", which is correct. Keep in mind that our mailing list allowed you to pick multiple platforms