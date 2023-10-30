module.exports = {
    name: 'sncfaccessibility',
    aliases: [],
    category: 'Information',
    usage: '',
    description: 'Official Special Needs Community Foundation Accessibility Statement on Special Needs Community Website.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Special Needs Community Foundation Accessibility Statement')
        .setDescription(`Updated: July 2022.

**General**
Special Needs Community Foundation strives to ensure that its services are accessible to people with disabilities. Special Needs Community Foundation has invested a significant amount of resources to help ensure that its website is made easier to use and more accessible for people with disabilities, with the strong belief that every person has the right to live with dignity, equality, comfort and independence.

**Accessibility on Https://specialneedscommunityfoundation.weebly.com/**
Https://specialneedscommunityfoundation.weebly.com/ makes available the UserWay Website Accessibility Widget that is powered by a dedicated accessibility server. The software allows Https://specialneedscommunityfoundation.weebly.com/ to improve its compliance with the Web Content Accessibility Guidelines (WCAG 2.1).

**Enabling the Accessibility Menu**
The Https://specialneedscommunityfoundation.weebly.com/ accessibility menu can be enabled either by hitting the tab key when the page first loads or by clicking the accessibility menu icon that appears on the corner of the page. After triggering the accessibility menu, please wait a moment for the accessibility menu to load in its entirety.

**Disclaimer**
Special Needs Community Foundation continues its efforts to constantly improve the accessibility of its site and services in the belief that it is our collective moral obligation to allow seamless, accessible and unhindered use also for those of us with disabilities.

In an ongoing effort to continually improve and remediate accessibility issues, we also regularly scan Https://specialneedscommunityfoundation.weebly.com/ with UserWay's Accessibility Scanner to identify and fix every possible accessibility barrier on our site. Despite our efforts to make all pages and content on Https://specialneedscommunityfoundation.weebly.com/ fully accessible, some content may not have yet been fully adapted to the strictest accessibility standards. This may be a result of not having found or identified the most appropriate technological solution.

**Here For You**
If you are experiencing difficulty with any content on Https://specialneedscommunityfoundation.weebly.com/ or require assistance with any part of our site, please contact us during normal business hours as detailed below and we will be happy to assist.

**Business Hours**
8:00 am - 6:00 pm Eastern Time Zone(ETS)

**Contact Us**
If you wish to report an accessibility issue, have any questions or need assistance, please contact Special Needs Community Foundation Customer Support as follows:

Email: specialneedscommunity1@gmail.com`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
    },
};
