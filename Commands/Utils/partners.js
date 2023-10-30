module.exports = {
    name: 'partners',
    aliases: [],
    category: 'Utils',
    usage: '',
    description: 'Official Partnerships with the Special Needs Community LLC',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Special Needs Community Partnership')
        .setDescription(`**HSBC Holdings & Partners**

ROBLOX Group | Partnership with Special Needs Community

HSBC Holdings & Partners PLC is a Private British Multinational Investment Bank and Financial Services Holding Company. It was the 6th Largest Bank in the World by 2020, and the Largest in Europe, with Total Assets of US$2.715 trillion (as of August 2020). HSBC Traces its Origin to a Hong in British Hong Kong and its Present Form was Established in London by the Hongkong and Shanghai Banking Corporation to act as a New Group Holding Company in 1991; Its Name Derives from that Company's Initials. The Hongkong and Shanghai Banking Corporation opened Branches in Shanghai in 1865 and was First Formally Incorporated in 1866.

**HSBC Business and Insurance**

ROBLOX Group | Partnership with Special Needs Community

HSBC Business and Insurance is a HSBC Holdings & Partners Parent Company Subsidiary Department, Business Services and Insurance Services Company. It is one of HSBC Holdings & Partners Subsidiaries aswell one of the most important subsidiaries for HSBC with Total Assets of US$234billion (as of August 2020). HSBC Business and Insurance Traces its Origin to 2018 and its Present Form was Established in London by the HSBC Holdings & Partners to act as a New Group Subsidiary Company in 2018; The HSBC Business and Insurance opened Branches in the HSBC Headquarters in 2019 and was First Formally Incorporated in 2020.

**HSBC Foundation**

ROBLOX Group | Partnership with Special Needs Community

HSBC Foundation is a Caring, Donation and Funding Non-Governmental Organization. It is the Subsidiary Non-Governmental Organization dedicated to Help People like Disabled, Illnesses, Child, Developing Countries and Give a Thriving Future. This NGO main objective is to solve International and Worldwide Issues & Problems by Fundings and Give a Better Future for All.

**Society for Worldwide Interbank Financial Telecom**

ROBLOX Group | Partnership with Special Needs Community

The Society for Worldwide Interbank Financial Telecommunication (SWIFT), legally S.W.I.F.T. SCRL, provides a network that enables financial institutions worldwide to send and receive information about financial transactions in a secure, standardized and reliable environment. SWIFT also sells software and services to financial institutions, much of it for use on the SWIFTNet network, and ISO 9362. Business Identifier Codes (BICs, previously Bank Identifier Codes) are popularly known as "SWIFT codes".

**Taiwan Overseas Community Affairs Council**

ROBLOX Group | Partnership with Special Needs Community

The Overseas Community Affairs Council is a cabinet-level council of the Executive Council of the Republic of China (Taiwan). Its main objective is to serve as a cultural, education, economic and informational exchanges organization between Taiwan and the overseas Taiwanese and Chinese descent communities.

**Taiwan Department of Commerce**

ROBLOX Group | Partnership with Special Needs Community

The Department of Commerce of the Ministry of Economic Affairs is responsible for Formulating Commercial Acts and Regulations, Planning and Promoting Commercial Policies, Providing Guidance for the Business Service Industry, Handling the Registration of Companies, Developing and Operating Governmental Commerce Administrative Information Service, Other Commercial Administrative Related Matters, etc.

**City of Chicago**

ROBLOX Group | Partnership with Special Needs Community

The area is the traditional homelands of the Anishinaabe, or the Council of the Three Fires: the Ojibwe, Odawa, and Potawatomi Nations. Many other Nations consider this area their traditional homeland, including the Myaamia, Ho-Chunk, Menominee, Sac and Fox, Peoria, Kaskaskia, Wea, Kickapoo, and Mascouten. The City specifically acknowledges the contributions of Kitihawa of the Potawatomi in fostering the community that has become Chicago. We acknowledge all Native peoples who came before us and who continue to contribute to our City.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
    },
};
