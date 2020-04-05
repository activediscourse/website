---
id: MacMiniReviewFeb
title: Mac Mini (2018) Review
author: Brett Koster
author_title: Active Discourse Co-Host
author_url: https://github.com/SeekAndDefineBK
author_image_url: https://avatars0.githubusercontent.com/u/60300571?s=460&v=4
tags: [technology, review, Mac, apple]
---

import useBaseUrl from "@docusaurus/useBaseUrl"

### Mac Mini (2018) Review

![Mac Mini (2018) Review](/website/blog/assets/2020-04-04-MacMini2018Review/Headline.jpg)

What more is there to say that hasn’t already been said about the Mac Mini (2018)? To start this off, I acknowledge the fact that this “review” is coming more than a year after the initial release of this computer. But shelf life be dammed, this Mac will live on for nearly a decade in my home. Here are my thoughts.

<!--truncate-->

## Why?
This Mac Mini was announced in October 2018 and I finally made the plunge in November 2019. Throughout 2019, I decided to dig into iOS development more and more. At the end of the year, I wanted to make my iOS development a little bit more legitimate by migrating off my Hackintosh build onto a proper Mac. The general consensus on Reddit is that a MacBook is recommended for App development, the main driving factor is mobility. Unfortunately, I don't understand that perspective. I have an office and I've molded it to serve me perfectly. The Mac Mini has more power per dollar than a MacBook Pro, plus all the tools I've amassed over my Hackintosh years translate 1:1 to the Mac Mini.

![My Happy Space](/website/blog/assets/2020-04-04-MacMini2018Review/DeskView.jpg)

## What?
So I bought a Mac Mini around black Friday. As you'll hear me talk about on Active Discourse, it was on sale and I was never going to buy this full price. I hemmed and hawed about which model, but ultimately decided to buy the Core i7 configuration with 1TB of storage and 8GB of RAM. We'll talk about the processor and RAM more in the next sections. Let's address the storage here and never talk about it again.

Simply put, I opted for the 1TB model for future proofing. The base model had 128GB at the time, that was never going to happen and is ridiculous in 2019, I'm glad Apple got rid of that size for their Mac's in 2020. 256GB was ruled out for closely related reasons. 512GB was heavily considered, but on my Hackintosh I ever so slightly run into storage issues already. One solution if I wanted to make 512GB work would be to have an external drive hang off the back of it immediately and forever... Or I could spend roughly the same amount and have the extra storage built in.

So I got the 1TB drive, my drive currently has 400GB used and I am pleased with the 1TB decision.


## Performance
Onto performance! Seeing 12 cores in Activity Monitor is a treat.  My Mac Mini has the Core i7-8700b processor. It is a 6-core, hyper-threaded processor and is clocked at a base speed of 3.2ghz and can turbo boost up to 4.1ghz. In the below section about heat, I tinkered with iStat Menus and with more aggressive fan rules, sustaining close to 4.1ghz under-load indefinitely is possible. In a handbrake test compressing a 1080p video, the Mac Mini was loud, but able to sustain 4.1ghz through the whole convert and quickly quieted down after the conversion completed.

One of the primary functions of this Mac will be to run Xcode, build times and simulator launches are at least 50-75% faster than my previous computer (Core i5-6500, 4 cores at 3.5ghz). The other primary function will be to crunch MP3’s using Marco Arment’s Forecast app, MP3 encoding is 100%-200% faster because his app utilizes every physical and hyper-threaded core available. Side note, I absolutely love seeing my processor spin up to 900-1100% utilization while crunching on MP3 files.

Apple upgraded the Mac Mini from using a mobile chipset to a desktop chipset in this generation and I absolutely applaud that decision. This computer, at least per Geekbench 5 numbers, rivals the previous generation Mac Pro and is the fastest Core i7 Mac available as of writing.


## Upgradable and Expandable
This Mac Mini would have been untouchable to me if the RAM wasn’t upgradable. My previous desktop computer was a custom build, my computer before that was a iMac 27” (2011) which I tried to upgrade the HDD to an SSD and I broke it... That experiment taught me I need a computer that I can open without worry. Fast forward to the Mac Mini. While it is more daunting to upgrade the RAM, I was comfortable with it due to extensive tinkering in my life. While I walk away with a sense of accomplishment by avoiding the Apple RAM tax, I’m frustrated that the RAM upgrade process was so hard. The iMac 27” has a back door that pops off for quick user accessible RAM, I don’t see why Apple couldn’t make the Mac Mini’s RAM more friendly to replace.

Outside of RAM however, the Mac Mini presents options to expand by taking advantage of the Thunderbolt/USB-C ports. The world is migrating the USB-C and this Mac Mini is ready for that. Best of all, each port is a Thunderbolt 3 port, which allows for very fast expandable options. For example, attaching an external NVM.e solid state drive to actually has the capability to perform faster than the built in storage. Another example, you can attach an external GPU to make up for the terrible integrated Intel GPU that Apple decided to put inside this Mac Mini.

[Mac Mini (2018) RAM Replacement Guide](https://www.youtube.com/watch?v=HAvA_JzKrLU&t=3s "Mac Mini (2018) RAM Replacement Guide")

## GPU
Replacing the RAM has an unexpected bonus effect applied to the GPU. The GPU has it’s own dedicated vRAM, but it also taps into a small amount of the system RAM as well. While the 8GB RAM was installed, my dual 4K displays had frequent frame rate issues. Specifically, triggering animations and transparency caused frame rate drops. This was upsetting and could have inspired me to return the Mac Mini. But once the 32GB upgrade was completed, the frame drop issues were reduced. Most animations are smooth, the transparency doesn’t tax the system, and Affinity Designer/Publisher run fine. Affinity Photo runs better than Photoshop on this Mac Mini, that is thanks to Affinity taking advantage of Apple's Metal API. But editing RAW photos is a poor experience on this Mac Mini. You can do it, but even simple edits to RAW photos will take longer than you'd like. Zooming and panning on a photo overburdens the GPU immediately and causes stutter. These issues weren't as bad when editing JPG's. But I shoot in RAW and I found myself editing photos on my iPad and then migrating the edits back to my Mac. The iPad handles RAW photos perfectly, which is amazing, but also highlights how poor the Intel UHD 630 really is.

I’ve seen numerous reviews harp on the Mac Mini for it’s terrible intel GPU, and those reviews are correct, this GPU is not good. But for App Development this GPU will be fine. Do not expect a good experience with video games, video editing, or RAW photo editing. I hope Apple considers putting in one of the mobile AMD GPU’s that are found in any of their MacBooks or maybe the GPU they produced for their iPad Pro.

## Hot
In my year of research before buying this Mac Mini, I found that there is a small controversy around the cooling system for this computer. The general sentiment is that the Core i3 or the Core i5 are the best models to buy because it didn’t tax the cooling system beyond its limit. While I was nervous about that, I bought the Core i7 model any way. My usage will not be nearly as heavy as the forums assume, many people were talking about gaming on this, which will not happen on this Mac Mini either. And the Core i5 simply wasn’t a big enough upgrade from my previous build to justify the cost.

Apple I believe setup their fan rules to be aggressively silent, in my early use, I couldn’t get the fan to kick up for any notable amount of time. I tinkered around with iStat Menus, saw the temps for the CPU and SSD. I prefer my temps to be a little lower than Apple prefers, so I setup some more aggressive fan rules to kick into higher gear and sooner, I’m satisfied with the temps and not concerned about the fan noise.

## Conclusion

This Mini beast will serve my needs for years. Right now it will be the most powerful computer in my home, but someday it won't be. I'm not sure what the future will hold, but this tiny powerful computer can be whatever it needs to be. Today it is my main development computer, tomorrow it may be a web server, then it may end it may end its life as a simple local network file server. The Mac Mini is an adorable versatile beast and I'm excited to finally have it. It has earned a spot on my Wall of Fame.

![The Wall of Fame](/website/blog/assets/2020-04-04-MacMini2018Review/Conclusion.jpg)
