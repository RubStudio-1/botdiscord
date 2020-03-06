const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "="
const dev = " Rub et DrimoZ"


client.on('ready', () => { 
  console.log('Bot Online!'); 

  let memberNumber = client.users.size; 
  let serverNumber = client.guilds.size; 
  client.user.setStatus("online"); 
  console.log("--------------------------------------"); 
  console.log("Bot online\nNombre de serveurs: " + serverNumber + "\navec\n" + memberNumber + " utilisateurs"); 
  console.log(`Logged in as ${client.user.tag}!`);
  setTimeout(game1, 20000); 

  function game1(){ 
    client.user.setActivity(prefix + 'help | ' + client.guilds.size + ' serveurs !'); 
      setTimeout(game2, 20000); 
  }; 

  function game2(){ 
    client.user.setActivity(prefix + 'support | ' + client.channels.size + ' salons !'); 
      setTimeout(game3, 20000); 
  }; 
  
  function game3(){ 
    client.user.setActivity(prefix + 'invitebot | ' + client.users.size + ' utilisateurs !'); 
      setTimeout(game4, 20000); 
  }; 

  function game4(){
    client.user.setActivity('Developped by Rub & DrimoZ')
    setTimeout(game1, 20000)
  }
});

///Propositions d'ajouts 


client.on('message', msg => {

  const messageArray = msg.content.split(" ");
  const args = messageArray.slice(1)

  if (msg.content.startsWith(prefix + "sugg")) {
    let sugg = args.join(" ")
    let suggch = client.channels.get('673554351150596106')

        if(!sugg) return msg.reply("merci de mettre une suggestion valide.")  
        if(!suggch) {return msg.reply("je ne trouve pas le salon pour envoyer le message.")
          }else{
            let suggembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(msg.author.avatarURL())
            .addField("Nouvelle suggestion :",`${sugg}`)
            .setFooter("Proposé par " + msg.author.username)
            suggch.send(suggembed)
            msg.reply(`Merci pour ta suggestion! Les développeurs vont maintenant l'analyser et peut être l'ajouter au bot par la suite.`)
          }
  }

  if (msg.content.startsWith(prefix + "+base")) {
    let hdvb = msg.content.split( ' ' )[1]
    let lienb = args.slice(1).join(" ")
    let basech = client.channels.get('672536303815884840')

        if(!hdvb) return msg.reply("merci d'indiquer un niveau d'hotel de ville.")
        if(!lienb) return msg.reply("merci de mettre le lien de la base. (Attention, pas de message, juste un lien)")    
        if(!basech) {return msg.reply("je ne trouve pas le salon pour envoyer le message.")
          }else{
            let bembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Nouvelle proposition de base")
            .setThumbnail(msg.author.avatarURL())
            .addField("Niveau d'hotel de ville :", hdvb)
            .addField("lien :", lienb)
            .setFooter("Proposé par " + msg.author.username)

            basech.send(bembed)
            msg.reply(`Merci pour ta proposition! Les développeurs vont maintenant l'analyser et peut être l'ajouter au bot par la suite.`)
          }
  }

  if (msg.content.startsWith(prefix + "+compo")) {
    let hdvc = msg.content.split( ' ' )[1]
    let lienc = args.slice(1).join(" ")
    let compoch = client.channels.get('672840542459133971')

        if(!hdvc) return msg.reply("merci d'indiquer un niveau d'hotel de ville.")
        if(!lienc) return msg.reply("merci de mettre le lien de la composition. (Attention, pas de message, juste un lien)")
        if(!compoch) {return msg.reply("je ne trouve pas le salon pour envoyer le message.")
          }else{
            let cembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Nouvelle proposition de base")
            .setThumbnail(msg.author.avatarURL())
            .addField("Niveau d'hotel de ville :", hdvc)
            .addField("lien :", lienc)
            .setFooter("Proposé par " + msg.author.username)

            compoch.send(cembed)
            msg.reply(`Merci pour ta proposition! Les développeurs vont maintenant l'analyser et peut etre l'ajouter au bot par la suite.`)
          }
  }


  if(msg.content === prefix + 'base') {

let pembed = new Discord.MessageEmbed()
.setTitle("Commande d'aide (Propositon de base)")
.setColor('RANDOM')
.setDescription('Voici la marche à suivre afin de proposer une nouvelle base pour le bot.')
.addField('La commande :', "=> ``" + prefix + "+base``")
.addField("Utilisation :", "=> ``" + prefix + "+base`` **<NiveauD'Hdv>** *<LienDeLaBase>*")
.addField("exemple :", "``" + prefix + "+base hdv12 https://...``")
.addField("Attention tout abus ou troll sera sanctionné !", "Merci de ne pas mettre autre chose qu'un lien dans l'espace réservé aux liens.")
.setFooter("Clash of Base - Développé par" + dev)

msg.channel.send(pembed);
};

if(msg.content === prefix + 'compo') {

let cembed = new Discord.MessageEmbed()
.setTitle("Commande d'aide (Propositon de Compo)")
.setColor('RANDOM')
.setDescription("Voici la marche à suivre afin de proposer une nouvelle composition d'attaque pour le bot.")
.addField('La commande :', "=> ``" + prefix + "+compo``")
.addField("Utilisation :", "=> ``" + prefix + "+compo`` **<NiveauD'Hdv>** *<LienDeLaVideoDeLaCompo>*")
.addField("exemple :", "``" + prefix + "+compo hdv12 https://...``")
.addField("Attention tout abus ou troll sera sanctionné !", "Merci de ne pas mettre autre chose qu'un lien dans l'espace réservé aux liens.")
.setFooter("Clash of Base - Développé par" + dev)
msg.channel.send(cembed);
};


});

///Autre ()

client.on('message', msg => {
  if (msg.content === prefix + 'invite_bot') {
    
    let iembed = new Discord.MessageEmbed()
    .setTitle(`Page d'invitation - **Clash of Base**`)
    .setColor("RANDOM")
    .setThumbnail(msg.author.avatarURL())
    .addField(`Voici le lien d'invitation du bot:`, `https://discordapp.com/oauth2/authorize?client_id=657293926730039306&scope=bot&permissions=2113404159`)
    .setFooter(`Clash of Base - Développé par ` + dev)
  
    msg.channel.send(iembed)
  }

  if (msg.content === prefix + 'tipeee') {
    
    let iembed = new Discord.MessageEmbed()
    .setTitle(`Tipee: Clash of base`)
    .setColor("RANDOM")
    .setThumbnail(msg.author.avatarURL())
    .addField(`Lien du tipee: https://fr.tipeee.com/persotips`)
    .setFooter(`Clash of Base - Développé par ` + dev)
  
    msg.channel.send(iembed)
  }


  if (msg.content === prefix + 'MAJ-1') {
    msg.channel.send('```Contenu MAJ du [2/02/2020] Mise en ligne à cette date des ajouts peuvent être effectué dici la.\n\n[V1.1.6]\n\n\n-Changement de préfix de [!] à [=] Afin de ne plus interferer avec Mee6 sur certaines commandes\n\n-Nouvelles Base crée Par les MCES [th 8 à 13] x30 \n\n-Option [=invitebot] Pour Inviter le bot dans votre serveur\n\n-Commande [=ping] pour la latence du bot \n\n-Mise en Embed les fonction [=help] / [=help_compo] / [=help_base] ainsi que toute les commandes [=bhv..] et Les commandes [=compo..]\n\n-Ajout commandes [=compo] / [=base] afin de pouvoirs ajouté des bases ou des compos a ma base de données (Faite les commandes pour savoir comment sen servir!) \n\n-Résolution de bugs majeurs\n\n-Ajout commande =MAJ-2```' );
  }

  if (msg.content === prefix + 'MAJ-2') {
    msg.channel.send("```Contenu de la mise a jour n°2 du bot [22/02/2020]: \n \n -> Mise à jour complète des images des compo (A finir !). \n -> Ajout de 5 bases de farm pour les hdv 7 à 13 \n -> Ajout de la commande =sugg, =base et =compo.\n -> Ajout de quelques bases pour l'hdv 7. Les compos arrrivent fort bientôt !  \n -> Correction de bugs mineurs et autres ! \n \n Des idées pour améliorer le bot ? Faites nous le savoir rapidement avec la commande =sugg !```")
  }

  if (msg.content === prefix + 'MAJ-3') {
    msg.channel.send("```Maj à venir```")
  }

  if (msg.content === prefix + 'support') {

    let pbembed = new Discord.MessageEmbed()
    .setTitle(`Commande de support - **Clash of Base**`)
    .setColor("RANDOM")
    .setThumbnail(msg.author.avatarURL())
    .setDescription("Un probleme avec le bot ? Rendez-vous sur notre serveur afin de nous en faire part !")
    .addField(`Voici le serveur de support du bot:`, `https://discord.gg/egxHg5S`)
    .setFooter(`Clash of Base - Développé par ` + dev)

    msg.channel.send(pbembed)
  }
  
///Ping

  if (msg.content.startsWith(prefix + "ping")) {
    msg.channel.send("Calcul...").then(message => {message.edit(":ping_pong: Pong! La latence du bot est de **" + Math.round(client.ws.ping) + " ms**.")})
    
  }


  if (msg.content === prefix + 'pong') {
    msg.channel.send('TU AS PERDU');
  }

  //help


  if (msg.content === prefix + 'help') {
   
    let hembed = new Discord.MessageEmbed()
    .setThumbnail(msg.author.avatarURL())
    .setColor("RANDOM")
    .setTitle(`Commande d'aide - **Clash Of Base**`)
    .setDescription(`Nos listes regroupent des centaines de propositions de compositions d'attaque et de modèles de villages différents.`)
    .addField(`Afin de voir toutes les nouveautés, tapez :`, "``" + prefix + "MAJ-1`` => Maj du 02/02/2020 \n``" + prefix + "MAJ-2`` => Maj du 20/02/2020 \n``" + prefix + "MAJ-3`` => Maj à venir")
    .addField(`Si tu souhaites inviter le bot sur ton serveur:`, "=> ``" + prefix + "invitebot``")
    .addField(`Si tu souhaites me soutenir via des vidéos ou des dons:`, "=> ``" + prefix + "tipeee``")
    .addField(`Un probleme avec le bot ?`, "=> ``" + prefix + "support``")
    .addField(`Pour voir toutes les compos que je propose:`, "=> ``" + prefix + "help_compo``")
    .addField(`Pour voir toutes les bases que je propose:`, "=> ``" + prefix + "help_base``")
    .addField(`Afin que le bot vous affiche sa latence :`, "=> ``" + prefix + "ping``")
    .addField(`Tu souhaites nous partager une base ou une compo ?`, "Pour nous proposer une base => ``" + prefix + "base`` \nPour nous proposer une composition d'attaque => ``" + prefix + "compo``")
    .addField(`Un suggestion pour le bot ?`, "=> ``" + prefix + "sugg`` (utilisation: *" + prefix + "sugg ``la suggestion``*)")
    .setFooter(`Clash of Base - Développé par ` + dev)

    msg.channel.send(hembed)
  
  }
  
  if (msg.content === prefix + 'help_base') {
    const bembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Commande d'aide (Bases) - **Clash Of Base**`)
    .setDescription(`Voici les différents villages présents dans ma base de donnée.`)
    .addField(`Les bases Hdv 7:`,"=> ``" + prefix + "bhdv7``")
    .addField(`Les bases Hdv 8:`,"=> ``" + prefix + "bhdv8``")
    .addField(`Les bases Hdv 9:`,"=> ``" + prefix + "bhdv9``")
    .addField(`Les bases Hdv 10:`,"=> ``" + prefix + "bhdv10``")
    .addField(`Les bases Hdv 11:`,"=> ``" + prefix + "bhdv11``")
    .addField(`Les bases Hdv 12:`,"=> ``" + prefix + "bhdv12``")
    .addField(`Les bases Hdv 13:`,"=> ``" + prefix + "bhdv13``")
   .setFooter(`Clash of Base - Développé par ` + dev)
  msg.channel.send(bembed); 
  }
  
  if (msg.content === prefix + 'help_compo') {
  let cembed = new Discord.MessageEmbed()
  .setTitle(`Commande d'aide (Compos) - **Clash of Base**`)
  .setFooter(`Clash of Base - Développé par ` + dev)
  .setColor("RANDOM")
  .setDescription(`Voici les différentes compositions d'attaques présentes dans ma base de donnée.`)
  .addField(`Les compos Hdv 7:`,"=> ``" + prefix + "compo7``")
  .addField(`Les compos Hdv 8:`,"=> ``" + prefix + "compo8``")
  .addField(`Les compos Hdv 9:`,"=> ``" + prefix + "compo9``")
  .addField(`Les compos Hdv 10:`,"=> ``" + prefix + "compo10``")
  .addField(`Les compos Hdv 11:`,"=> ``" + prefix + "compo11``")
  .addField(`Les compos Hdv 12:`,"=> ``" + prefix + "compo12``")
  .addField(`Les compos Hdv 13:`,"=> ``" + prefix + "compo13``")
  msg.channel.send(cembed)
  }
  
    

/// base

  if (msg.content === prefix + 'bhdv10') {
    let h10embed = new Discord.MessageEmbed()
    .setTitle(`Bases Hdv 10 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes bases hdv 10 présentes dans ma base de donnée.`)
    .addField("Bases de gdc:", "``" + prefix + "b10gdc``, ``" + prefix + "b10gdc1``, ``" + prefix + "b10gdc2``, ``" + prefix + "b10gdc3``, ``" + prefix + "b10gdc4``, ``" + prefix + "b10gdc5``, ``" + prefix + "b10gdc6``")
    .addField("Bases de farm:", "``" + prefix + "b10farm``, ``" + prefix + "b10farm1``, ``" + prefix + "b10farm2``, ``" + prefix + "b10farm3``, ``" + prefix + "b10farm4``, ``" + prefix + "b10farm5``, ``" + prefix + "b10farm6``, ``" + prefix + "b10farm7``, ``" + prefix + "b10farm8``")
    .addField("Bases de rush:", "``" + prefix + "b10rush``, ``" + prefix + "b10rush1``")
    .addField("Bases par John:", "``" + prefix + "b10-1``, ``" + prefix + "b10-2``, ``" + prefix + "b10-3``, ``" + prefix + "b10-4``, ``" + prefix + "b10-5``")
    msg.channel.send(h10embed)
  }

  if (msg.content === prefix + 'bhdv12') {
    let h12embed = new Discord.MessageEmbed()
    .setTitle(`Bases Hdv 12 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes bases hdv 12 présentes dans ma base de donnée.`)
    .addField("Bases de gdc:", "``" + prefix + "b12gdc``, ``" + prefix + "b12gdc1``, ``" + prefix + "b12gdc2``, ``" + prefix + "b12gdc3``, ``" + prefix + "b12gdc4``, ``" + prefix + "b12gdc5``, ``" + prefix + "b12gdc6``")
    .addField("Bases de farm:", "``" + prefix + "b12farm``, ``" + prefix + "b12farm1``, ``" + prefix + "b12farm2``, ``" + prefix + "b12farm3``, ``" + prefix + "b12farm4``, ``" + prefix + "b12farm5``, ``" + prefix + "b12farm6``, ``" + prefix + "b12farm7``, ``" + prefix + "b12farm8``, ``" + prefix + "b12farm9``, ``" + prefix + "b12farm10``")
    .addField("Bases de rush:", "``" + prefix + "b12rush``, ``" + prefix + "b12rush1``, ``" + prefix + "b12rush2``, ``" + prefix + "b12rush3``")
    .addField("Bases par John:", "``" + prefix + "b12-1``, ``" + prefix + "b12-2``, ``" + prefix + "b12-3``, ``" + prefix + "b12-4``, ``" + prefix + "b12-5``")
    .addField("Bases MCES:", "``" + prefix + "b12MCES``, ``" + prefix + "b12MCES1``, ``" + prefix + "b12MCES2``, ``" + prefix + "b12MCES3``, ``" + prefix + "b12MCES4``, ``" + prefix + "b12MCES5``, ``" + prefix + "b12MCES6``, ``" + prefix + "b12MCES7``, ``" + prefix + "b12MCES8``, ``" + prefix + "b12MCES9``, ``" + prefix + "b12MCES10``, ``" + prefix + "b12MCES11``, ``" + prefix + "b12MCES12``, ``" + prefix + "b12MCES13``, ``" + prefix + "b12MCES14``, ``" + prefix + "b12MCES15``")
    .addField("Bases NOVA:", "``" + prefix + "b12NOVA``, ``" + prefix + "b12MCES1``, ``" + prefix + "b12NOVA2``, ``" + prefix + "b12NOVA3``, ``" + prefix + "b12NOVA4``, ``" + prefix + "b12MCES5``, ``" + prefix + "b12NOVA6``, ``" + prefix + "b12NOVA7``, ``" + prefix + "b12NOVA8``, ``" + prefix + "b12NOVA9``, ``" + prefix + "b12NOVA10``, ``" + prefix + "b12NOVA11``, ``" + prefix + "b12NOVA12``, ``" + prefix + "b12NOVA13``, ``" + prefix + "b12NOVA14``, ``" + prefix + "b12NOVA15``")
    msg.channel.send(h12embed)
  }

  if (msg.content === prefix + 'bhdv13') {
    let h13embed = new Discord.MessageEmbed()
    .setTitle(`Bases Hdv 13 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes bases hdv 13 présentes dans ma base de donnée.`)
    .addField("Bases de gdc:", "``" + prefix + "b13gdc``, ``" + prefix + "b13gdc1``, ``" + prefix + "b13gdc2``, ``" + prefix + "b13gdc3``, ``" + prefix + "b13gdc4``, ``" + prefix + "b13gdc5``, ``" + prefix + "b13gdc6``")
    .addField("Bases de farm:", "``" + prefix + "b13farm``, ``" + prefix + "b13farm1``, ``" + prefix + "b13farm2``, ``" + prefix + "b13farm3``, ``" + prefix + "b13farm4``, ``" + prefix + "b13farm5``, ``" + prefix + "b13farm6``, ``" + prefix + "b13farm7``, ``" + prefix + "b13farm8``")
    .addField("Bases de rush:", "``" + prefix + "b13rush``")
    .addField("Bases par John:", "``" + prefix + "b13-1``, ``" + prefix + "b13-2``, ``" + prefix + "b13-3``, ``" + prefix + "b13-4``, ``" + prefix + "b13-5``")
    msg.channel.send(h13embed)
  }

  if (msg.content === prefix + 'bhdv8') {
    let h8embed = new Discord.MessageEmbed()
    .setTitle(`Bases Hdv 8 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes bases hdv 8 présentes dans ma base de donnée.`)
    .addField("Bases de gdc:", "``" + prefix + "b8gdc``, ``" + prefix + "b8gdc1``, ``" + prefix + "b8gdc2``, ``" + prefix + "b8gdc3``, ``" + prefix + "b8gdc4``, ``" + prefix + "b8gdc5``, ``" + prefix + "b8gdc6``, ``" + prefix + "b8gdc6``, ``" + prefix + "b8gdc7``, ``" + prefix + "b8gdc8``, ``" + prefix + "b8gdc9``, ``" + prefix + "b8gdc10``, ``" + prefix + "b8gdc11``")
    .addField("Bases de farm:", "``" + prefix + "b8farm``, ``" + prefix + "b8farm1``, ``" + prefix + "b8farm2``, ``" + prefix + "b8farm3``, ``" + prefix + "b8farm4``")
    .addField("Bases par John:", "``" + prefix + "b8-1``, ``" + prefix + "b8-2``, ``" + prefix + "b8-3``, ``" + prefix + "b8-4``, ``" + prefix + "b8-5``")
    msg.channel.send(h8embed)
  }

  if (msg.content === prefix + 'bhdv9') {
    let h9embed = new Discord.MessageEmbed()
    .setTitle(`Bases Hdv 9 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes bases hdv 9 présentes dans ma base de donnée.`)
    .addField("Bases de gdc:", "``" + prefix + "b9gdc``, ``" + prefix + "b9gdc1``, ``" + prefix + "b9gdc2``, ``" + prefix + "b9gdc3``, ``" + prefix + "b9gdc4``, ``" + prefix + "b9gdc5``, ``"+ prefix + "b9gdc6``,``" + prefix + "b9gdc7``")
    .addField("Bases de farm:", "``" + prefix + "b9farm``, ``" + prefix + "b9farm1``, ``" + prefix + "b9farm2``, ``" + prefix + "b9farm3``, ``" + prefix + "b9farm4``, ``" + prefix + "b9farm5``, ``" + prefix + "b9farm6``, ``" + prefix + "b9farm7``, ``" + prefix + "b9farm8``, ``" + prefix + "b9farm9``")
    .addField("Bases par John:", "``" + prefix + "b9-1``, ``" + prefix + "b9-2``, ``" + prefix + "b9-3``, ``" + prefix + "b9-4``, ``" + prefix + "b9-5``")
    msg.channel.send(h9embed)
  }

  if (msg.content === prefix + 'bhdv11') {
    let h11embed = new Discord.MessageEmbed()
    .setTitle(`Bases Hdv 11 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes bases hdv 11 présentes dans ma base de donnée.`)
    .addField("Bases de gdc:", "``" + prefix + "b11gdc``, ``" + prefix + "b11gdc1``, ``" + prefix + "b11gdc2``, ``" + prefix + "b11gdc3``, ``" + prefix + "b11gdc4``, ``" + prefix + "b11gdc5``, ``" + prefix + "b11gdc6``")
    .addField("Bases de farm:", "``" + prefix + "b11farm``, ``" + prefix + "b11farm1``, ``" + prefix + "b11farm2``, ``" + prefix + "b11farm3``, ``" + prefix + "b11farm4``, ``" + prefix + "b11farm5``, ``" + prefix + "b11farm6``, ``" + prefix + "b11farm7``, ``" + prefix + "b11farm8``")
    .addField("Bases de rush:", "``" + prefix + "b11rush``, ``" + prefix + "b11rush1``, ``" + prefix + "b11rush2`` ,  ``" + prefix + "b11rush3``")
    .addField("Bases par John:", "``" + prefix + "b11-1``, ``" + prefix + "b11-2``, ``" + prefix + "b11-3``, ``" + prefix + "b11-4``, ``" + prefix + "b11-5``")
    .addField("Bases par Rub:", "``" + prefix + "b11r1``, ``" + prefix + "b11r2``, ``" + prefix + "b11r3``, ``" + prefix + "b11r4``")
    msg.channel.send(h11embed)
  }

  if(msg.content.startsWith(prefix +"bhdv7")) {
    let h7embed = new Discord.MessageEmbed()
    .setTitle(`Bases Hdv 7 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes bases hdv 7 présentes dans ma base de donnée.`)
    .addField("Bases de farm:", "``" + prefix + "b7farm``, ``" + prefix + "b7farm1``, ``" + prefix + "b7farm2``, ``" + prefix + "b7farm3``, ``" + prefix + "b7farm4``")
    msg.channel.send(h7embed)
  }

  ///info compo


  if (msg.content === prefix + 'compo10') {
    
    let c10embed = new Discord.MessageEmbed()
    .setTitle(`Compos Hdv 10 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes compos hdv10 présentes dans ma base de donnée /Visuels NoN disponible/.`)
    .addField("Aqh:", "Aqh BB-Drag => ``" + prefix + "10aqhbd`` \nAqh Baby Hogs  => ``" + prefix + "10aqhbbh`` \nAqh BB-Valk => ``" + prefix + "10aqhbdv`` \nAqh Dragon => ``" + prefix + "10aqhd``\nAqh BB Electro BB => ``" + prefix + "10aqhebb`` \nAqh Gargouilles => ``" + prefix + "10aqhg``\nAqh Mass BB Drags => ``" + prefix + "10aqhbb`` \nAqh Mineurs => ``" + prefix + "10aqhm``\nAqh Mobal => ``" + prefix + "10aqhmb`` \nAqh PeBoWitch => ``" + prefix + "10aqhpbw``\nAqh VaWitch => ``" + prefix + "10aqhvw``")
    .addField("Sorcière:", "Dual Walk (PeBoWitch) => ``" + prefix + "10dw`` \nFrozen pekka => ``" + prefix + "10fp``\nFrozen Witch => ``" + prefix + "10fw`` \nWitch Slap Bowlers => ``" + prefix + "10wb``\nWitch Slap => ``" + prefix + "10ws``")
    .addField("Ballons:", "Ghost électro => ``" + prefix + "10ge`` \nLavaLoon Squelettes => ``" + prefix + "10mbs`` \nMobal => ``" + prefix + "10mb``")
    .addField("Chauve Souris:", "BatSlap => ``" + prefix + "10bats``\nDragBat => ``" + prefix + "10db`` \nGoBat => ``" + prefix + "10gb``\nMobBat => ``" + prefix + "10mbats`` \nPekkaGoBat => ``" + prefix + "10pgb``\nPekkaHogBats => ``" + prefix + "10phb``")
    .addField("Cochons:", "HGHB => ``" + prefix + "10hghb``\n GoHog => ``" + prefix + "10gh``")
    .addField("Dragons:", "Dragon => ``" + prefix + "10d`` \nDraHo => ``" + prefix + "10dh`` \nDrag Zap => ``" + prefix + "10zd`` \nGiBoDragLoon => ``" + prefix + "10gibdb`` \nMass Baby clone => ``" + prefix + "10bbc``\nMass Baby Drag => ``" + prefix + "10bd``")
    .addField("Golems:", "Bowler Smash => ``" + prefix + "10bs``")
    .addField("Pekkas:", "Pekka Smash => ``" + prefix + "10ps``\nMass Pekka => ``" + prefix + "10mp``")
    .addField("Valkyries:", "Falcon => ``" + prefix + "10f``")
    .addField("Mineurs:", "Full Mineur => ``" + prefix + "10m``")
    msg.channel.send(c10embed)
  }

  if (msg.content === prefix + 'compo11') {
    
    let c11embed = new Discord.MessageEmbed()
    .setTitle(`Compos Hdv 11 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes compos hdv11 présentes dans ma base de donnée /Visuels NoN disponible/.`)
    .addField("Aqh:", "Aqh Baby Drag => ``" + prefix + "11aqhbb`` \nAqh Electro => ``" + prefix + "11aqhed`` \nAqh GiBoElectro => ``" + prefix + "11aqhgbed`` \nAqh Hogs => ``" + prefix + "11aqhh``\nAqh Mineurs => ``" + prefix + "11aqhm`` \nAqh Mobal => ``" + prefix + "11aqhmb``")
    .addField("Cochons:", "Electro Hogs => ``" + prefix + "11eh`` \nGoHog => ``" + prefix + "11gh``\nHGHB=> ``" + prefix + "11hghb``\nHogs => ``" + prefix + "11h``\nIcy Hogs => ``" + prefix + "11ih``")
    .addField("Ballons:", "BoLaLo => ``" + prefix + "11bmb`` \nGhost Electro => ``" + prefix + "11ge`` \nGoMoBall => ``" + prefix + "11gmb``")
    .addField("Dragons:", "Dragon et ballon => ``" + prefix + "11db``\nDragon Bats => ``" + prefix + "11dcs``\nKS Electro => ``" + prefix + "11kse``")
    .addField("Mineurs:", "BoMineur => ``" + prefix + "11bm``")
    .addField("Sorcière:", "Bat Slap => ``" + prefix + "11bs`` \nFrozen Witches => ``" + prefix + "11fw`` \nGiBoWitch => ``" + prefix + "11gibw`` \nWitch Slap => ``" + prefix + "11ws``")
    .addField("Valkyries:", "Falcon => ``" + prefix + "11f``\nFalcon bat => ``" + prefix + "11fb``")
    msg.channel.send(c11embed)
  }

  if (msg.content === prefix + 'compo12') {
    
    let c12embed = new Discord.MessageEmbed()
    .setTitle(`Compos Hdv 12 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes compos hdv12 présentes dans ma base de donnée /visuels NoN disponible/.`)
    .addField("Aqh:", "Aqh BB Drag => ``" + prefix + "12aqhbb`` \nAqh BoMi => ``" + prefix + "12aqhbm`` \nAqh BoWiPe => ``" + prefix + "12aqhbwp`` \nAqh BoPe => ``" + prefix + "12aqhbp``\nAqh Cocktail => ``" + prefix + "12aqhc``\nAqh Dragon=> ``" + prefix + "12aqhd``\nAqh GiBoElectro => ``" + prefix + "12aqhgbed``\nAqh Hog => ``" + prefix + "12aqhh``\nAqh Mass Minion => ``" + prefix + "13aqhmm``\nAqh Mineurs => ``" + prefix + "12aqhm``\nAqh Mineurs Cochons => ``" + prefix + "12aqhmh``\nAqh Mobal => ``" + prefix + "12aqhmb``\nAqh Pekka Bouliste => ``" + prefix + "12aqhpb``\nAqh Pekka Mineur => ``" + prefix + "12aqhpm``")
    .addField("Cochons:", "BoHo => ``" + prefix + "12bh`` \nBoVaHo => ``" + prefix + "12bvh``\nGoBoHo => ``" + prefix + "12gbh``\nHGHB => ``" + prefix + "12hghb``\nGoHog => ``" + prefix + "12gh``")
    .addField("Ballons:", "Electro lavaloon => ``" + prefix + "12emb`` \nGhost Electro => ``" + prefix + "12ge`` \nHexa MoBal => ``" + prefix + "12hmb`` \nLooNion => ``" + prefix + "12bg``\nMobal => ``" + prefix + "12mb``")
    .addField("Boulistes:", "HPBW (Guérriseuse, Pekka, Bouliste, Sorcière) => ``" + prefix + "12hpbw``\nSpam Bouliste => ``" + prefix + "12b``")
    .addField("Dragons:", "Baby Drag & ballon => ``" + prefix + "12bbb``\nDragon & Ballon => ``" + prefix + "12db``\nDrags bats => ``" + prefix + "12dcs``\n Electro ballon gel => ``" + prefix + "12edbg``\n Electro boulistes => ``" + prefix + "12edb``\nElectro Valkyries => ``" + prefix + "12edv``")
    .addField("Géants:", "Army12 => ``" + prefix + "1212`` \nGibowitch => ``" + prefix + "12gibw``")
    .addField("Mineurs:", "Mineurs & Cochon => ``" + prefix + "12mh``")
    .addField("Pekka:", "PekkaBoBat => ``" + prefix + "12pbb``\nPekka LaLoon => ``" + prefix + "12pmb``")
    .addField("Sorcière:", " Avalanche=> ``" + prefix + "12a``\nGoWitch => ``" + prefix + "12gw``\nWrecker WiWi => ``" + prefix + "12www``\nBatSlap => ``" + prefix + "12bs``")
    .addField("Valkyries:", "Falcon => ``" + prefix + "12f``")
    msg.channel.send(c12embed)
  }

  if (msg.content === prefix + 'compo13') {
    
    let c13embed = new Discord.MessageEmbed()
    .setTitle(`Compos Hdv 13 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes compos hdv13 présentes dans ma base de donnée /visuels NoN disponible/.`)
    .addField("Aqh:", "Aqh Dragons => ``" + prefix + "13aqhd`` \nAqh Mineurs => ``" + prefix + "13aqhm`` \nAqh MoBal => ``" + prefix + "13aqhmb`` \nAqh Yeti => ``" + prefix + "13aqhy``")
    .addField("Boulistes:", "Bowler Attack => ``" + prefix + "13ba`` \nIce BoWitch => ``" + prefix + "13ibw``")
    .addField("Dragons:", "Clone Ed Drag => ``" + prefix + "13cedd`` \nDragCLone => ``" + prefix + "13dbc`` \nElectrone => ``" + prefix + "13e`` \nElectro Ballons => ``" + prefix + "13edb``")
    .addField("Cochons:", "Mass Hogs => ``" + prefix + "13mh``")
    .addField("Pekka:", "Full pekka => ``" + prefix + "13fp`` \nPekka Bobats => ``" + prefix + "13pbb`` \nPekka Smash => ``" + prefix + "13ps``")
    .addField("Mineurs:", "Mineurs smashing => ``" + prefix + "13ms``")
    .addField("Yeti:", "Frozen Yeti => ``" + prefix + "13fy`` \nYeti bats => ``" + prefix + "13yb`` \nYeti Octoquake => ``" + prefix + "13yo``\nYeti spam => ``" + prefix + "13ys``\nYeti spam => ``" + prefix + "13ysp`` ")
    .addField("Walk:", "Full Gueris => ``" + prefix + "13fg``")
    msg.channel.send(c13embed)
  }

  if (msg.content === prefix + 'compo7') {
    
    let c7embed = new Discord.MessageEmbed()
    .setTitle(`Compos Hdv 7 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes compos hdv7 présentes dans ma base de donnée /visuels NoN disponible/.`)
    .addField("Ballons:", "Loonions => ``" + prefix + "7bg``")
    .addField("Bouliste:", "Bowler Walk => ``" + prefix + "7bw``")
    .addField("Dragons:", "Dragon Ballon => ``" + prefix + "7db`` \nDargHo => ``" + prefix + "7dh``")
    .addField("Cochons:", "Full Cochons => ``" + prefix + "7h`` \nHeHoh=> ``" + prefix + "7hh``\nGoWiHog =>``" + prefix + "7gwh``")
    .addField("Géant:", "GiBarch => ``" + prefix + "7gb`` \nGiWi => ``" + prefix + "7gw`` \nGiWi2 => ``" + prefix + "7gw2``\nGobelins Knife => ``" + prefix + "7gk``\nHGHB=> ``" + prefix + "7hghb``\nWiGiHe=> ``" + prefix + "7wgh``")
    .addField("Gargouilles", "Mass Minions => ``" + prefix + "7g``")
    msg.channel.send(c7embed)
  }

  if (msg.content === prefix + 'compo9') {
    
    let c9embed = new Discord.MessageEmbed()
    .setTitle(`Compos Hdv 9 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes compos hdv9 présentes dans ma base de donnée.`)
    .addField("Aqh:", "Aqh Barch => ``" + prefix + "9aqhb`` \nAqh BBdrag => ``" + prefix + "9aqhbb`` \nAqh Cochons => ``" + prefix + "9aqhh`` \nAqh Dragon => ``" + prefix + "9aqhd``\nAqh Gargouilles => ``" + prefix + "9aqhg`` \nAqh Gobelins => ``" + prefix + "9aqhgob``\nAqh GoWitch  => ``" + prefix + "9aqhgw``\nAqh GoHog => ``" + prefix + "9aqhgh`` \nAqh GoMoBal => ``" + prefix + "9aqhgmb`` \nAqh GoVaHog => ``" + prefix + "9aqhgvh`` \nAqh Hell Storm => ``" + prefix + "9aqhhs``\nAqh Lavaloonion => ``" + prefix + "9aqhmbg`` \nAqh MoBal (Rage) => ``" + prefix + "9aqhmb`` \nAqh MoBal (Speed) => ``" + prefix + "9aqhmb2`` \nAqh PekkaHog => ``" + prefix + "9aqhph``\nAqh Valkyrie => ``" + prefix + "9aqhv`` \nSingle Shock=> ``" + prefix + "9ss``")
    .addField("Ballons:", "GoMoBal => ``" + prefix + "9gmb`` \nGoVaLoon => ``" + prefix + "9gvb``\nLaVaLooNion => ``" + prefix + "9mgb`` \nLaVaLoon Squellettes => ``" + prefix + "9mbs`` \nMobal (Speed) => ``" + prefix + "9mb`` \nMobal (2foudres) => ``" + prefix + "9mb2f``\nMobal (4foudres) => ``" + prefix + "9mb4f``\nElectro Smash => ``" + prefix + "9eds``")
    .addField("Cochons:", "Armoured Ruckus => ``" + prefix + "9ar`` \nGo Hog => ``" + prefix + "9gh`` \n GoHog2 (soins) => ``" + prefix + "9gh2`` \nHGHB => ``" + prefix + "9hghb``\nHogs & Witches => ``" + prefix + "9hw`` \nStoned Hogs => ``" + prefix + "9sh``")
    .addField("Dragons:", "BabyLoon => ``" + prefix + "9bbb``\nDragHo => ``" + prefix + "9dh`` \nDragBallons => ``" + prefix + "9db`` \nFull Drags => ``" + prefix + "9d`` \nGoBoDrag  => ``" + prefix + "9gbd``\nGoWiDrag => ``" + prefix + "9gwd`` \nHealer dominant => ``" + prefix + "9hd`` \nLaLoDrag => ``" + prefix + "9mbd`` \nOctoBaby  => ``" + prefix + "9ob``")
    .addField("Golem:", "Avalanche => ``" + prefix + "9a``\nFreak Show => ``" + prefix + "9fs`` \nGoWi (Ballon) => ``" + prefix + "9gw`` \nGoWiz => ``" + prefix + "9gwiz`` \nMass Skeletons  => ``" + prefix + "9ms``\nStonned GoWiWi => ``" + prefix + "9sgww``")
    .addField("Pekkas:", "GoWiPe => ``" + prefix + "9gwp`` \nGoWipe (cochons) => ``" + prefix + "9gwph`` \nGoWipe (ballons) => ``" + prefix + "9gwpb`` \nMass Pekka => ``" + prefix + "9mp`` \nPekka Hog => ``" + prefix + "9ph``\nPekka Sosotte Walk  => ``" + prefix + "9psw`` \nPekka Walk (cochons) => ``" + prefix + "9pwh`` \nPekka Walk (BB) => ``" + prefix + "9pwbb``")
    .addField("Sorcières:", "GoWiWi => ``" + prefix + "9gww``\nSorcière Séismes => ``" + prefix + "9w``\nWitch Slap => ``" + prefix + "9ws``")
    .addField("Valkyries", "Excalibur => ``" + prefix + "9e``\nE-xcalibur => ``" + prefix + "9e-x``\nE-walk => ``" + prefix + "9ew``\nFalcon => ``" + prefix + "9f``\nGoWiVa => ``" + prefix + "9gwv``\nGoWiWiVa => ``" + prefix + "9gwwv``\nGrundinator => ``" + prefix + "9g``\nValkyries => ``" + prefix + "9v``")
    msg.channel.send(c9embed)

  }

  if (msg.content === prefix + 'compo8') {
    
    let c8embed = new Discord.MessageEmbed()
    .setTitle(`Compos Hdv 8 - **Clash of Base**`)
    .setFooter(`Clash of Base - Développé par ` + dev)
    .setColor("RANDOM")
    .setDescription(`Voici les différentes compos hdv 8  présentes dans ma base de donnée.`)
    .addField("Ballons:", "GoVaLoon => ``" + prefix + "8gvb`` \n Loonion => ``" + prefix + "8bg``")
    .addField("Dragons:", "Dragons Ballons => ``" + prefix + "8db`` \nFull Dragons => ``" + prefix + "8d``")
    .addField("Géants:", "GiHeHog => ``" + prefix + "8ghh`` \nHGHB => ``" + prefix + "8hghb``")
    .addField("Sorcières:", "GoWiWi => ``" + prefix + "8gww``")
    .addField("Cochons:", "Full Cochons => ``" + prefix + "8h``\nGoHog => ``" + prefix + "8gh``\nGoVaHo => ``" + prefix + "8gvh``\nStoned GoHog => ``" + prefix + "8sh``")
    .addField("Pekkas:", "GoWiPe => ``" + prefix + "8gwp``\nGoWiWiPe => ``" + prefix + "8gwwp`` \nLoGoWipe => ``" + prefix + "8bgwp`` \nPekka Walk (Cochons) => ``" + prefix + "8pwh``\nPekka Walk (ballons) => ``" + prefix + "8pwb``")
    .addField("Valkyries:", "Falcon => ``" + prefix + "8f`` \nGoWiVa => ``" + prefix + "8gwv``\nGoVaBo (Bouliste Walk) => ``" + prefix + "8gvbw``")
    msg.channel.send(c8embed)
  }
  
});

client.on('message', msg => { 
  
  ///Commande compo
  if (msg.content === prefix + '7hghb') {
    msg.channel.send('TUTO - HGHB : X-progaming https://youtu.be/0q85tgMYr6I 4min07');
  }
  if (msg.content === prefix + '7db') {
    msg.channel.send('TUTO - Dragon Ballon : Clash with JT https://youtu.be/ErBYR6-WObg');
  }
  if (msg.content === prefix + '7g') {
    msg.channel.send('TUTO - Mass Minions : KinG Gam3r https://youtu.be/eWxT_Wv1ajM');
  }
  if (msg.content === prefix + '7hh') {
    msg.channel.send('TUTO - HeHog : KinG Gam3r https://youtu.be/cgAKwfxBUCU');
  }
  if (msg.content === prefix + '7h') {
    msg.channel.send('TUTO - Full Cochon : WAANI/ZRMA https://youtu.be/TUZ_-jxyIjs');
  }
  if (msg.content === prefix + '7gwh') {
    msg.channel.send('TUTO - GoWiHog : KinG Gam3r https://youtu.be/KU9eF4Pjuz4');
  }
  if (msg.content === prefix + '7wgh') {
    msg.channel.send('TUTO - WiGiHe : Apps & Games11 https://youtu.be/V-TLqqlzvSQ');
  }
  if (msg.content === prefix + '7bw') {
    msg.channel.send('TUTO - Bowler Walk : Viper https://youtu.be/vknrSKS6698');
  }
  if (msg.content === prefix + '7gb') {
    msg.channel.send('TUTO - GiBarch : FlammableSole 97 https://youtu.be/ncSDhMOq3GA');
  }
  if (msg.content === prefix + '7bg') {
    msg.channel.send('TUTO - Loonions : KinG Gam3r https://youtu.be/Oe9W3RDvU-4');
  }
  if (msg.content === prefix + '7dh') {
    msg.channel.send('TUTO - DragHo : Vikash Khairwalhttps://youtu.be/BMY6WkHCfzs ');
  }
  if (msg.content === prefix + '7gw') {
    msg.channel.send('TUTO - GiWi : Subham Gamer https://youtu.be/sTCf7AD1qII Voir aussi la variante avec plus de géants, moins de sorciers : !7gw2');
  }
  if (msg.content === prefix + '7gw2') {
    msg.channel.send('TUTO - GiWi2 : s.edson 2311 https://youtu.be/LVvxylja0HU Voir la variante avec moins de géants et plus de sorciers : !7gw');
  }
  if (msg.content === prefix + '7d') {
    msg.channel.send('TUTO - Full Drag : FF COC https://youtu.be/q9Sj0C_O5Eg 3min11 ');
  }
  if (msg.content === prefix + '7gk') {
    msg.channel.send('TUTO - Goblin knife : Mr. Ash https://youtu.be/XkpyRdYowIE');
  }
  if (msg.content === prefix + '10aqhbb') {
    msg.channel.send('TUTO - AQH Mass BB drags : CarbonFin https://youtu.be/QANKxDLIE6Y');
  }

  if (msg.content === prefix + '10aqhbbh') {
    msg.channel.send('TUTO - AQH Baby hogs  :  Iwan Clashers https://youtu.be/s2LH0Xq8CSA ');
  }

  if (msg.content === prefix + '10aqhbd') {
    msg.channel.send('TUTO - Aqh BB Drag : https://youtu.be/vYfwjylrlqg ');
  }

  if (msg.content === prefix + '10aqhd') {
    msg.channel.send('TUTO - AQH Dragon : Iwan Clasher   https://youtu.be/KYRIzKNNhEo');
  }

  if (msg.content === prefix + '10aqhebb') {
    msg.channel.send('TUTO - AQH ELECTRO BB : Zolokotroko TOP https://youtu.be/a_0oMbv89Ao ');
  }

  if (msg.content === prefix + '10aqhg') {
    msg.channel.send('TUTO - AQH Gargouilles :  Clash with Cory https://youtu.be/OSOSZEbeJjk ');
  }

  if (msg.content === prefix + '10aqhm') {
    msg.channel.send('TUTO - AQH Mineurs : https://www.youtube.com/watch?v=ML1HtcwFpj8&feature=youtu.be ');
  }

  if (msg.content === prefix + '10aqhmb') {
    msg.channel.send('TUTO - Aqh MoBall : https://youtu.be/J6YKRDA4eAI');
  }

  if (msg.content === prefix + '10aqhpbw') {
    msg.channel.send('TUTO - AQH PeBoWitch : Djino clash https://youtu.be/2KzGEhPf9LM ');
  }

  if (msg.content === prefix + '10bats') {
    msg.channel.send('TUTO - BatSlap : Clash with Eric https://youtu.be/XfNAW7Yfx-k ');
  }

  if (msg.content === prefix + '10bbc') {
    msg.channel.send('TUTO - Mass Baby clone  :  Clash with Cory https://youtu.be/pVYdL2Dcz9g ');
  }

  if (msg.content === prefix + '10bd') {
    msg.channel.send('TUTO - Mass Baby Drag : https://www.youtube.com/watch?v=r3yPThDN740 Voir la variante avec lAQH : !10aqhbd ');
  }

  if (msg.content === prefix + '10bs') {
    msg.channel.send('TUTO - Bowler Smash : Echo Gaming https://youtu.be/Xphxr1tGebs ');
  }

  if (msg.content === prefix + '10d') {
    msg.channel.send('TUTO - Dragon :Clash with Cory - https://www.youtube.com/watch?v=A6XmluEdp4Y ');
  }

  if (msg.content === prefix + '10aqhbdv') {
    msg.channel.send('TUTO - AQH Baby Drag et Valkyrie : https://www.youtube.com/watch?v=NekF5F46aXM ');
  }

  if (msg.content === prefix + '10db') {
    msg.channel.send('TUTO - DragBat : CarbonFin https://youtu.be/Yb3l6jieNXw ');
  }

  if (msg.content === prefix + '10dh') {
    msg.channel.send('TUTO - DragHo : https://youtu.be/dNFllzAl248 ');
  }

  if (msg.content === prefix + '10dw') {
    msg.channel.send('PeBoWitch : Clashing N Games https://youtu.be/11IQnrwSZzk ');
  }

  if (msg.content === prefix + '10f') {
    msg.channel.send('TUTO - Falcon : https://youtu.be/OhqqN0zUwjo ');
  }

  if (msg.content === prefix + '10fp') {
    msg.channel.send('TUTO - Frozen Pekka : Echo Gaming https://youtu.be/d6MJRlA5RLM Variante avec sorcières : !10fpw ');
  }

  if (msg.content === prefix + '10fw') {
    msg.channel.send('TUTO - Frozen Witch : https://www.youtube.com/watch?v=6c24i8Clsvs ');
  }

  if (msg.content === prefix + '10ge') {
    msg.channel.send('TUTO - GHOST ELECTRO : Clash with Cory https://youtu.be/zSPhZx5qosQ ');
  }

  if (msg.content === prefix + '10gb') {
    msg.channel.send('TUTO - GoBat : Clash With Cory https://youtu.be/EeIQFbrWHDc ');
  }


  if (msg.content === prefix + '10gh') {
    msg.channel.send('TUTO - GoHog : https://youtu.be/fe4T0JsPbN8 Variante avec 3 gels et valks en cdc :');
  }

  if (msg.content === prefix + '10gibdb') {
    msg.channel.send('TUTO - GiBo DragLoon :TURTLEtwCOC - https://www.youtube.com/watch?v=GUZYZgJfEQY ');
  }

  if (msg.content === prefix + '10m') {
    msg.channel.send('TUTO - Full Mineur : Clash with Cory https://youtu.be/JLvLHThPFqw ');
  }
  if (msg.content === prefix + '10hghb') {
    msg.channel.send('TUTO - HGHB : https://youtu.be/XknK3ilEJC4 ');
  }

  if (msg.content === prefix + '10mb') {
    msg.channel.send('TUTO - MoBal : Echo Gaming https://youtu.be/_aik70yUMR0');
  }

  if (msg.content === prefix + '10mbats') {
    msg.channel.send('TUTO - MoBat : Gouloulou https://youtu.be/DWEXrVsC3Sk ');
  }

  if (msg.content === prefix + '10mbs') {
    msg.channel.send('TUTO - LavaLoon Squelettes : https://www.youtube.com/watch?v=4d6zFDkEhlQ');
  }

  if (msg.content === prefix + '10mp') {
    msg.channel.send('TUTO - Mass Pekka : https://youtu.be/QlMTpLJlaRg ');
  }

  if (msg.content === prefix + '10pgb') {
    msg.channel.send('TUTO - PekkaGoBat : Echo Gaming https://youtu.be/UmK_0D4Fx2M ');
  }

  if (msg.content === prefix + '10wb') {
    msg.channel.send('TUTO - Witch Slap Bowlers : https://youtu.be/T4OZrhaNeQU');
  }

  if (msg.content === prefix + '10phb') {
    msg.channel.send('TUTO - PEKKAHOG BATS:John-Chibe https://youtu.be/km0rz2cFLKE ');
  }

  if (msg.content === prefix + '10ws') {
    msg.channel.send('TUTO - Witch Slap :  Echo Gaming https://youtu.be/9q54x27dSiY  John Chibe https://youtu.be/3kmDiaaMeJM ');
  }

  if (msg.content === prefix + '10zd') {
    msg.channel.send('TUTO - Zap DragLavaLoon : https://www.youtube.com/watch?v=PMEIphhH7vw&list=PLburDfUucYckGo4KxoOD_VRl2Gr_ytIR7 ');
  }

  if (msg.content === prefix + '11aqhbb') {
    msg.channel.send('TUTO - AQH Baby Drags : Zolokotroko TOP https://youtu.be/saCysUriTfY ');
  }

  if (msg.content === prefix + '11aqhed') {
    msg.channel.send('TUTO - Aqh Electro : https://youtu.be/mO_vQ6AR3m8  Gameplay à 7:24');
  }

  if (msg.content === prefix + '11aqhgbed') {
    msg.channel.send('TUTO - AQH GiBo-Électro: https://youtu.be/kMNlD2Og07I ');
  }

  if (msg.content === prefix + '11aqhh') {
    msg.channel.send('TUTO - AQH Hogs  :  Echo Gaming https://youtu.be/5cpatvb9R-8 ');
  }

  if (msg.content === prefix + '11aqhm') {
    msg.channel.send('TUTO - AQH Mineurs : Echo Gaming 7min https://youtu.be/8Vdbbk7LH3I ');
  }

  if (msg.content === prefix + '11aqhmb') {
    msg.channel.send('TUTO AQH MoBal A venir ! (image en cours de création)');
  }

  if (msg.content === prefix + '11bm') {
    msg.channel.send('TUTO - BoMiner : https://youtu.be/MPbFvNftlXk ');
  }

  if (msg.content === prefix + '11bmb') {
    msg.channel.send('TUTO - BoLaLo : CarbonFin https://youtu.be/Z2VXiqewUjQ ');
  }

  if (msg.content === prefix + '11bs') {
    msg.channel.send('TUTO - BatSlap : Echo Gaming https://youtu.be/-PPOPAKCApY ');
  }

  if (msg.content === prefix + '11db') {
    msg.channel.send('TUTO - Dragons et Ballons : https://youtu.be/VOoGJQPyY_0 ');
  }

  if (msg.content === prefix + '11dcs') {
    msg.channel.send('TUTO - DragBat : Echo Gaming 3min35 https://youtu.be/JVUc6IWctBk ');
  }

  if (msg.content === prefix + '11eh') {
    msg.channel.send('TUTO - Électro Hogs : Iwan Clasher  https://youtu.be/ra4xaFBDqxk ');
  }

  if (msg.content === prefix + '11f') {
    msg.channel.send('TUTO - Falcon : https://youtu.be/a2yxZs_l7N8 ');
  }

  if (msg.content === prefix + '11fb') {
    msg.channel.send('TUTO - Falcon Bat : Bisectatron Gaming https://youtu.be/TKmeaGubNi8 ');
  }

  if (msg.content === prefix + '11fw') {
    msg.channel.send('TUTO - Frozen Witches : Clash with Eric https://youtu.be/t7Q4s8ktyw4 ');
  }

  if (msg.content === prefix + '11ge') {
    msg.channel.send('TUTO Ghost Electro : https://youtu.be/nMVMECjZN0A ');
  }

  if (msg.content === prefix + '11gh') {
    msg.channel.send('TUTO - GoHoG : https://youtu.be/0QZL3wr6L7E ');
  }

  if (msg.content === prefix + '11gibw') {
    msg.channel.send('TUTO - GiBoWitch : https://youtu.be/5ZsaA9JKTVU ');
  }

  if (msg.content === prefix + '11gmb') {
    msg.channel.send('TUTO - GoMoBal : https://youtu.be/6-fIdJU_VIs https://youtu.be/6QRnUhW0KLQ gameplays 2:32 et 5:15 ');
  }

  if (msg.content === prefix + '11h') {
    msg.channel.send('TUTO - Hogs : Clash with BD ClasherS https://youtu.be/3tM94EqFKs4 ');
  }

  if (msg.content === prefix + '11hghb') {
    msg.channel.send('TUTO - HGHB : https://youtu.be/Qv0FAThc9l0 ');
  }

  if (msg.content === prefix + '11ih') {
    msg.channel.send('TUTO - Icy hogs : Iwan Clasher https://youtu.be/rAgI1lIN2yM');
  }

  if (msg.content === prefix + '11kse') {
    msg.channel.send('TUTO - Kill Squad Électro : Echo Gaming 4min25 https://youtu.be/8Vdbbk7LH3I ');
  }

  if (msg.content === prefix + '11ws') {
    msg.channel.send('TUTO - Witch Slap : Echo Gaming https://youtu.be/9q54x27dSiY');
  }

  if (msg.content === prefix + '1212') {
    msg.channel.send('TUTO - ARMY 12 (GiBoWitch) : Clash Riders https://youtu.be/jdRmXY7uzEE Voir aussi un variante du GiBoWitch : =12gibw ');
  }

  if (msg.content === prefix + '12a') {
    msg.channel.send('TUTO - Avalanche : Clash with BD ClasherS https://youtu.be/Zq24JuZ3gc0 ');
  }

  if (msg.content === prefix + '12aqhbb') {
    msg.channel.send('TUTO - AQH BB Drags : Iwan Clasher  https://youtu.be/taD8vXzfwwM 10min30 ');
  }

  if (msg.content === prefix + '12aqhbm') {
    msg.channel.send('TUTO - AQH BoMi : Fear in the war https://youtu.be/ed_vcKfO3sY ');
  }

  if (msg.content === prefix + '12aqhbp') {
    msg.channel.send('TUTO - AQH BoPe : Clash with BD ClasherS https://youtu.be/pgODAZHjb4U ');
  }

  if (msg.content === prefix + '12aqhc') {
    msg.channel.send('TUTO - AQH Cocktail : Clash with BD ClasherS https://youtu.be/NTlANFT1B9s');
  }

  if (msg.content === prefix + '12aqhbwp') {
    msg.channel.send('TUTO AQH BoWiPe - X-Maha Gaming   https://youtu.be/ElN8Vr05nac Variante avec géants dans le démolisseur : https://youtu.be/n_wccSzKrgA ');
  }

  if (msg.content === prefix + '12aqhd') {
    msg.channel.send('TUTO - AQH Dragon : https://www.youtube.com/watch?v=QJwhrfzNLic ');
  }

  if (msg.content === prefix + '12aqhgbed') {
    msg.channel.send('TUTO - GiBo Electro : https://www.youtube.com/watch?v=kMNlD2Og07I');
  }

  if (msg.content === prefix + '12aqhh') {
    msg.channel.send('TUTO - AQH Hogs : Clash with Eric https://youtu.be/H0HNcXgTPNE ');
  }

  if (msg.content === prefix + '12aqhm') {
    msg.channel.send('TUTO - AQH Mineur : https://www.youtube.com/watch?v=ngc_HnUUNyM ');
  }

  if (msg.content === prefix + '12aqhmh') {
    msg.channel.send('TUTO - AQH Mineurs Cochons  :  CarbonFin https://youtu.be/gVlcJe4ek0I ');
  }

  if (msg.content === prefix + '12aqhmm') {
    msg.channel.send('TUTO - AQH Mass Minions : Carbon Fin https://youtu.be/zVefFmGk7oY ');
  }

  if (msg.content === prefix + '12aqhpb') {
    msg.channel.send('TUTO AQH Pekka bouliste : https://www.youtube.com/watch?v=UssHzEmzyTs ');
  }
});


client.on('message', msg => {
  if (msg.content === prefix + '12aqhpm') {
    msg.channel.send('TUTO - AQH Pekka Mineur : https://www.youtube.com/watch?v=alOcYxfDu0s');
  }

  if (msg.content === prefix + '12b') {
    msg.channel.send('TUTO - Spam Boulistes : https://www.youtube.com/watch?v=XLoVlBmKc5g ');
  }

  if (msg.content === prefix + '12bbb') {
    msg.channel.send('TUTO - Baby Drag et Ballon : https://youtu.be/9FaMSDDH8RM ');
  }

  if (msg.content === prefix + '12bg') {
    msg.channel.send('TUTO - LooNion : https://www.youtube.com/watch?v=GVwcXa2AlEQ');
  }

  if (msg.content === prefix + '12bh') {
    msg.channel.send('TUTO - BoHo : Clash with BD ClasherS   https://youtu.be/GElm1uWWCm8 ');
  }

  if (msg.content === prefix + '12bs') {
    msg.channel.send('TUTO - BatSlap : Echo Gaming https://youtu.be/-PPOPAKCApY ');
  }

  if (msg.content === prefix + '12bvh') {
    msg.channel.send('TUTO - BoVaHo : Clash Riders   https://youtu.be/d0GMWxbJdmA');
  }

  if (msg.content === prefix + '12db') {
    msg.channel.send('TUTO - Dragon ballon : https://www.youtube.com/watch?v=HWm_BlS9d2k Variantes : Clash with BD Clasher \n https://youtu.be/_p0sx3e7Rw8 2 clones\n https://youtu.be/lwbMozGtgms 2 sorts chauve-souris ');
  }

  if (msg.content === prefix + '12dcs') {
    msg.channel.send('TUTO - Dragon chauve-souris : Iwan Clasher https://youtu.be/96Vo-n6NYQg ');
  }

  if (msg.content === prefix + '12edb') {
    msg.channel.send('TUTO - Électro Drag et boulistes https://www.youtube.com/watch?v=8jdLQ7lDKZg&feature=youtu.be Voir la variante avec les valkyries et un sort de clonage : =12edv ');
  }

  if (msg.content === prefix + '12edbg') {
    msg.channel.send('TUTO - Électro Drag, ballon et gel :  Clash Riders https://youtu.be/oQvnQ6CgRcc Variantes Électro Drag Valkyrie : =12edv Électro Drag Boulistes : =12edb ');
  }

  if (msg.content === prefix + '12edv') {
    msg.channel.send('TUTO - Électro drag et valkyries : https://www.youtube.com/watch?v=qd4x_BYwMZE Voir aussi la variante avec les boulistes : =12edb');
  }


  if (msg.content === prefix + '12emb') {
    msg.channel.send('TUTO - Électro Lavaloon  -  Clash with Thunder https://youtu.be/-7jgayPoIuM ');
  }

  if (msg.content === prefix + '12f') {
    msg.channel.send('TUTO - Falcon : https://www.youtube.com/watch?v=ZC8zXVZA8Pc ');
  }

  if (msg.content === prefix + '12gbh') {
    msg.channel.send('TUTO - GoBoHo : https://www.youtube.com/watch?v=c8LQc9vE0Os&feature=youtu.be Voir la variante GoHog : =12gh');
  }

  if (msg.content === prefix + '12ge') {
    msg.channel.send('TUTO - Ghost Électro : ECHO Gaming https://youtu.be/EMe509TsURM ');
  }

  if (msg.content === prefix + '12gh') {
    msg.channel.send('TUTO - GoHog : https://www.youtube.com/watch?v=-yYKQW8wZJM&feature=youtu.be ');
  }

  if (msg.content === prefix + '12gibw') {
    msg.channel.send('TUTO - GiBoWitch : https://www.youtube.com/watch?v=kFh4QUvUF6k');
  }

  if (msg.content === prefix + '12gw') {
    msg.channel.send('TUTO - GoWitch : https://www.youtube.com/watch?v=JEfPtJicxhY');
  }

  if (msg.content === prefix + '12hghb') {
    msg.channel.send('TUTO - HGHB : Clash Riders https://youtu.be/8HUGLOsw18g ');
  }

  if (msg.content === prefix + '12hmb') {
    msg.channel.send('TUTO - Hexa MoBal : https://youtu.be/mf77bCDPwuk ');
  }

  if (msg.content === prefix + '12hpbw') {
    msg.channel.send('TUTO - HPBW : https://www.youtube.com/watch?v=lKi9VMTnYlM&t=90s');
  }

  if (msg.content === prefix + '12mb') {
    msg.channel.send('TUTO - Penta Mobal : Clash Riders https://www.youtube.com/watch?v=c7bvdMxPIgo&t=28s Gouloulou https://youtu.be/DXf6yLxnofc');
  }

  if (msg.content === prefix + '12mh') {
    msg.channel.send('TUTO - Mineur Cochon : https://youtu.be/Bw1ddcBGzhE ');
  }

  if (msg.content === prefix + '12pbb') {
    msg.channel.send('TUTO - PekkaBoBat : CarbonFin https://youtu.be/uwebdcT30-Q ');
  }

  if (msg.content === prefix + '12pmb') {
    msg.channel.send('TUTO - Pekka Lavaloon  :  XMaha https://youtu.be/_kUTLCYL3yo');
  }

  if (msg.content === prefix + '12www') {
    msg.channel.send('TUTO Wrecker WiWi : ECHO Gaming  https://youtu.be/0oYq1YwlJyI');
  }

  if (msg.content === prefix + '8bg') {
    msg.channel.send('TUTO - Ballon gargouilles : https://www.youtube.com/watch?v=XQCafFWvKOs https://drive.google.com/uc?id=1NMoZvbfjhxWZG0Z4CthROuGxHKA2i7eS');
  }

  if (msg.content === prefix + '8bgwp') {
    msg.channel.send('TUTO - LoGoWiPe : https://www.youtube.com/watch?v=XQCafFWvKOs https://drive.google.com/uc?id=1NTEnERNrZla_0DqYd5Mc65TTx3fDfngR');
  }

  if (msg.content === prefix + '8d') {
    msg.channel.send('TUTO - Full Dragons : https://www.youtube.com/watch?v=CDvbvqnbCAU Voir la variante avec des ballons : =8db https://drive.google.com/open?id=1O4noH2bhIK1a6zwzxJjl-MtGM8QDFJbT');
  }

  if (msg.content === prefix + '8db') {
    msg.channel.send('TUTO - Dragons et ballons : https://www.youtube.com/watch?v=CDvbvqnbCAU https://drive.google.com/uc?id=1OB3Q80olTre4xHrAyufIJVPXddaGyoiL');
  }

  if (msg.content === prefix + '8f') {
    msg.channel.send('TUTO - Falcon : https://www.youtube.com/watch?time_continue=5&v=3SQuJJI2KRU https://drive.google.com/uc?id=1O1X08T2XGs1X9Nc1cfAFIfkkPztd1ehk');
  }

  if (msg.content === prefix + '8gh') {
    msg.channel.send('TUTO - GoHog : https://youtu.be/rFusRcC8_Rk Voir aussi la compo Stoned GoHog : =8sh https://drive.google.com/uc?id=1Nu-Wv9bOnGf6-DoGbfJ3Cy1XsiERU1vM');
  }

  if (msg.content === prefix + '8ghh') {
    msg.channel.send('TUTO - GiHeHog : https://www.youtube.com/watch?v=U62gyeDTOo8&t=121s Variantes :GiHeBoBa : Changez les 12 cochons pour 12 ballons. Sorts : 3 rages, 1 poison et 1 speed en Cdc GiHeBoVa : Changez les 12 cochons en 7 valkyries. Sorts : 2 rages, 1 soin et des poisons https://drive.google.com/open?id=1O1WMsYabSyhz6qWKYLZYGHdOC-DbrYtP');
  
  }

  if (msg.content === prefix + '8gvbw') {
    msg.channel.send('TUTO - GoVaBo (Boulistes walk) : lisses 91 coc https://youtu.be/_Bp3QOFs3vM https://drive.google.com/uc?id=1OGdZUrhYkMD30PGYZlIoZtK_II7uxCRE Variante : https://drive.google.com/uc?id=1O9_x5yk3qCVLtOGt-HZRqhFMW9pC5m-h');
  }
});
client.on('message', msg => {
  if (msg.content === prefix + '8gvh') {
    msg.channel.send('TUTO - GoVaHo : https://www.youtube.com/watch?v=Yr5uyhfdNcs https://drive.google.com/uc?id=1Nuj7OxDG-7qZ2cig0o_liiKWUXwqiGmG');
  }

  if (msg.content === prefix + '8gwp') {
    msg.channel.send('TUTO - GoWiPe Déploiement classique : https://www.youtube.com/watch?v=VNCzGf5TDNo Autre déploiement : https://drive.google.com/uc?id=1NkeabyPkJt-EsVP8i-HDHcbPbBOTcdzC');
  }

  if (msg.content === prefix + '9gwph') {
    msg.channel.send('TUTO - Gowipe, GoWiPe avec cochons : https://www.youtube.com/watch?v=Y7uZfG9Q10M Voir aussi une variante sans les cochons : =9gwp  ou avec des ballons : =9gwpb https://drive.google.com/uc?id=1WmU1JtIMl0hjj6NlEW7aH7CFuy_i90f9');
  }

  if (msg.content === prefix + '8gwv') {
    msg.channel.send('TUTO - GoWiVa : https://www.youtube.com/watch?v=pOXHy8YHJl4 Voir aussi une variante avec ballons: =8gvb https://drive.google.com/uc?id=1NiyxWKO9Qa2BRCZ58pWBGzLiQpyznzAm');
  }

  if (msg.content === prefix + '8gvb') {
    msg.channel.send('TUTO - GoVaLoon : https://www.youtube.com/watch?v=V2sPJL0-a3A https://drive.google.com/uc?id=1Njz4QS46ZGK3EsxCvyWExpihs8sfqxkb');
  }

  if (msg.content === prefix + '8gww') {
    msg.channel.send('TUTO - GoWiWi : https://www.youtube.com/watch?v=3C2YEPWgEdo https://drive.google.com/uc?id=1Nb6XwB-dWu-PU5T9dhvKjTMYs1zFUTby');
  }

  if (msg.content === prefix + '8gwwp') {
    msg.channel.send('TUTO - GoWiWiPe : https://www.youtube.com/watch?v=iHHq7FKsWmI&t=102s Voir aussi les variantes : GoWiPe : =8gowipe GoWiPe cochons : =8gowipeh GoWiWi : =8gowiwi https://drive.google.com/uc?id=1NewmIqmAC-XyhW9BTH-vAvEfrSo0DsLt');
  }

  if (msg.content === prefix + '8h') {
    msg.channel.send('TUTO Full Cochons : https://youtu.be/ZubtiBCEjR4 https://drive.google.com/uc?id=1NY0mhoECsCwlmI3iN43AdQvp8eo5gmQN');
  }


  if (msg.content === prefix + '8hghb') {
    msg.channel.send('TUTO - HGHB : https://www.youtube.com/watch?v=asjifdEKifQ Variante avec 2 soins, 1 rage : Judo Sloth  https://youtu.be/d96ppJ6RXvg https://drive.google.com/uc?id=1NcVDKyjB_7qysimgt8VFaE6qxQLJNWYm');
  }

  if (msg.content === prefix + '8pwb') {
    msg.channel.send('TUTO - PekkaWalk : PekkaWalk ballons https://www.youtube.com/watch?v=kvxzwWUkXyo Voir aussi la version avec les cochons : !8pwhhttps://drive.google.com/uc?id=1NM43K7f_ft1QdzaD3CBP0ksHyVfomq5j');
  }

  if (msg.content === prefix + '8pwh') {
    msg.channel.send('TUTO - PekkaWalk Pekka walk cochons https://www.youtube.com/watch?time_continue=2&v=MS_ObfMFxes Voir aussi une variante avec ballons : =8pwb https://drive.google.com/uc?id=1NKZqssPg8VoIxAYo6VfedXVMq5TsFHQV');
  }

  if (msg.content === prefix + '8sh') {
    msg.channel.send('TUTO - Stoned Gohog https://youtu.be/rFusRcC8_Rk Voir aussi la compo GoHog : =8gh https://drive.google.com/uc?id=1ND2HZF6UlSk3tLZ-w8IhYLHleGhgrh0j');
  }

  if (msg.content === prefix + '13aqhd') {
    msg.channel.send('TUTO - AQH DRAGS : Lexnos Gaming https://youtu.be/cG_9fXCWbrk');
  }

  if (msg.content === prefix + '13aqhmb') {
    msg.channel.send('TUTO - AQH MoBal CarbonFin https://youtu.be/TC2Ky5SIqn8');
  }

  if (msg.content === prefix + '13aqhy') {
    msg.channel.send('TUTO - AQH YETI Clash Bashing https://youtu.be/gv_UeRAWVbU ');
  }

  if (msg.content === prefix + '13ba') {
    msg.channel.send('TUTO - BOWLER ATTACK: Clash with Eric https://youtu.be/2BtJBKfjM9w');
  }

  if (msg.content === prefix + '13cedd') {
    msg.channel.send('TUTO - CLONE ED DRAG :Clash with BD clasherS https://www.youtube.com/watch?v=cDs3ZhR-zX8 ');
  }


  if (msg.content === prefix + '13pbb') {
    msg.channel.send('TUTO - PEKKA BOBATS coc FADA https://youtu.be/nzkjIeZjzT0   https://drive.google.com/uc?id=1Ay0HlpXciw--4ZMoajDPeP1bMkpYIyDS');
  }

  if (msg.content === prefix + '13ps') {
    msg.channel.send('TUTO - PEKKA SMASH : Sir Moose Gaming https://youtu.be/TZkOrjVYJzM https://drive.google.com/uc?id=1Q7BMgkXLLTiR0XBp2diWnB2Z2b97Xgxk');
  }

  if (msg.content === prefix + '9a') {
    msg.channel.send('TUTO - Avalanche : https://www.youtube.com/watch?v=19CtDTZ_S_U https://drive.google.com/uc?id=1U1C1wHWvggD9BQcfgEbX3h30fBKIoASM');
  }

  if (msg.content === prefix + '13dbc') {
    msg.channel.send('TUTO - DRAGCLONE : sadik gaming https://www.youtube.com/watch?v=NBpLUIEq0FQ&feature=youtu.be ');
  }

  if (msg.content === prefix + '13e') {
    msg.channel.send('TUTO - ELECTRONE : CarbonFin https://youtu.be/Fa9w3adHbBo ');
  }

  if (msg.content === prefix + '13edb') {
    msg.channel.send('TUTO - ELECTRO BALLONS: sadik gaming (3min18) : https://youtu.be/NBpLUIEq0FQ ');
  }

  if (msg.content === prefix + '9aqhb') {
    msg.channel.send(' TUTO - AQH Barch :  https://youtu.be/DAW52f_YUHc https://drive.google.com/uc?id=1Ueqhhn2o1fpq01Sb9pW4Vdj4stHWdIVE');
  }
  if (msg.content === prefix + '9w') {
    msg.channel.send('TUTO - Sorcières Séismes : https://www.youtube.com/watch?v=Iani9lzXpIw https://drive.google.com/uc?id=1YKkfs7_Fh5LMrK_6Q-pxx1IrOFstvsr7');
  }
  if (msg.content === prefix + '13fp') {
    msg.channel.send('TUTO - FULL PEKKA : Général Tony https://youtu.be/SS_l19LqECQ https://drive.google.com/uc?id=1Hqy1QIKYuh-7HC7YHr81oBDJvOdvFna8');
  }

  if (msg.content === prefix + '13fy') {
    msg.channel.send('TUTO : FROZEN YETI Sir Moose Gaming  https://youtu.be/6-6f4WwxghQ https://drive.google.com/uc?id=1P1dghv5q6Otichr-miXpwgkzG8hmSWVm');
  }

  if (msg.content === prefix + '13ibw') {
    msg.channel.send('TUTO - ICE BOWITCH: Itzu https://youtu.be/U9d7A5lF16Q ');
  }

  if (msg.content === prefix + '13mh') {
    msg.channel.send('TUTO - MASS HOGS :APK Gaming https://youtu.be/WVmIp0HQGzI https://drive.google.com/uc?id=1pgB3mHC1l7ci3_2pyKk2lK3N9Ng11en-');
  }

  if (msg.content === prefix + '13ms') {
    msg.channel.send('TUTO - MINER SMASHING Clash with BD Clashers https://youtu.be/WdJCPqHBfTY https://drive.google.com/uc?id=1Cdsg_yPYq3JfckGQ-WRQD9-hqvPK5kfF ');
  }

  if (msg.content === prefix + '13pbb') {
    msg.channel.send('TUTO - PEKKA BOBATS coc FADA https://youtu.be/nzkjIeZjzT0 https://drive.google.com/uc?id=1UeB__SJvqe9XZSQ6lvmZ6O-d8kl0tVcq');
  }

  if (msg.content === prefix + '13ps') {
    msg.channel.send('TUTO - PEKKA SMASH :Sir Moose Gaming https://youtu.be/TZkOrjVYJzM https://drive.google.com/uc?id=1C16Yl5CEymzgw6OsTb3wSaDTzj-EAyVC');
  }

  if (msg.content === prefix + '13yb') {
    msg.channel.send('TUTO - YETI BATS Clash with BD Clashers https://youtu.be/pIA74xuFH2w https://drive.google.com/uc?id=1Fc-lcAD68CY4X6_H28560uMpOwthlKob');
  }

  if (msg.content === prefix + '13ys') {
    msg.channel.send(' TUTO - Yeti smash Sir Moose Gaming https://youtu.be/9Li5ayijC5w https://drive.google.com/uc?id=1gLEXJeDHOu_uYAopRwjiWrk_VMUwyJxl');
  }

  if (msg.content === prefix + '13yo') {
    msg.channel.send('TUTO - YETI OCTOQUAKE Sir Moose Gaming https://youtu.be/q7vjMlT3rrQ https://drive.google.com/uc?id=1ZEETlEudISnNosBWT7guu9wyIAizkk7d');
  }
  if (msg.content === prefix + '13fg') {
    msg.channel.send('TUTO - FULL GUÉRIS :Clash with Eric https://youtu.be/2BtJBKfjM9w https://drive.google.com/uc?id=1684nz-5tTNjK7Co-_8NLIUs6Hx2nZ1zS');
  }


  if (msg.content === prefix + '13ysp') {
    msg.channel.send('TUTO - YETI SPAM: Gouloulou https://youtu.be/JCJCuShmiQk https://drive.google.com/uc?id=1-NDdeHrdn1KwWk3lCtY3ai5vtMDBXo3D');
  }

  if (msg.content === prefix + '9aqhbb') {
    msg.channel.send('TUTO - AQH Baby Drags : https://www.youtube.com/watch?v=OmdgVcNH3TE&t=298s https://drive.google.com/uc?id=1UMBHDiOkoFKVYv7EHKTKv0YevbtAH3Bp');
  }
  
  if(msg.content === prefix + '9aqhd') {
    msg.channel.send('TUTO - AQH Dragon : https://www.youtube.com/watch?v=44ZTq815tmw https://drive.google.com/uc?id=1UBrgdF72Djrz2MUphyIC01SxePSBQasq');
  }

  if (msg.content === prefix + '9aqhg') {
    msg.channel.send('TUTO - AQH Gargouilles : https://www.youtube.com/watch?v=dmXzRlWhy_Y https://drive.google.com/uc?id=1UhHraKTzatIaRYa6cWkE2hGsp82o79fu');
  }

  if (msg.content === prefix + '9aqhgmb') {
    msg.channel.send('TUTO - AQH GoMoBal : https://www.youtube.com/watch?v=RX8VNezk394 https://drive.google.com/uc?id=1Uo31CmOZrSnOKUTkzhJOERjy7SUBb0j1');
  }

  if (msg.content === prefix + '9aqhgob') {
    msg.channel.send('TUTO - AQH Gobelins - https://www.youtube.com/watch?v=tKV3D1MwGX8&feature=youtu.be Cest Faisable mais, en avez vous le courage ? https://drive.google.com/uc?id=1V3ueZoagKakcj0yOkVu4ulff8WwfBTKR');
  }

  if (msg.content === prefix + '9aqhgvh') {
    msg.channel.send('TUTO - Aqh GoVaHog : https://youtu.be/z3mFnxJ67AI https://drive.google.com/uc?id=1WIyDoPegER5IExGGuOrgWG6y-_4NQAyv');
  }

  if (msg.content === prefix + '9aqhgw') {
    msg.channel.send('TUTO - AQH GoWitch (Dual Walk) : https://www.youtube.com/watch?v=NQ4eEscQn1w https://drive.google.com/uc?id=1UyL6qZV2eBe3QLhhbAoJPhSzVJAL7CiQ');
  }

  if (msg.content === prefix + '9aqhh') {
    msg.channel.send('TUTO - AQH Cochon : https://www.youtube.com/watch?v=gO4gnkB9oRc https://drive.google.com/uc?id=1Uz6qWrt9-xC6NMI5KlSwOJa5SFnss0VZ');
  }

  if (msg.content === prefix + '9aqhhs') {
    msg.channel.send('TUTO - AQH Hell Storm : Echo Gaming https://youtu.be/-q7KdxYnabc https://drive.google.com/uc?id=1VCbazQWtJoCqm-9Bs3UnOwlWTy1iKXCf');
  }

  if (msg.content === prefix + '9aqhmb') {
    msg.channel.send('TUTO - AQH MoBal : https://www.youtube.com/watch?v=NQa7KmKuPaQ Voir aussi la version avec speed : =9aqhmb2 https://drive.google.com/uc?id=1YT0wkv4kJoBja8K_neleJbpHQim7_D6T');
  }

  if (msg.content === prefix + '9aqhmb2') {
    msg.channel.send('TUTO - AQH Mobal : Mobal speed https://youtu.be/uKk7HQ0_qBM https://drive.google.com/uc?id=1VNXFCzDQccxPZ3bSiO7Fy6n4w6hR9DBW Voir aussi une version avec rage : =9aqhmb');
  }

  if (msg.content === prefix + '9aqhmbg') {
    msg.channel.send('TUTO - AQH LavaLooNion : https://www.youtube.com/watch?v=tOsKD2UEIJc&t=299s https://drive.google.com/uc?id=1VFug_zxAajlUFxvlPvC3Y7kLkDDMvDbh');
  }

  if (msg.content === prefix + '9aqhv') {
    msg.channel.send('TUTO - AQH Valkyrie: https://www.youtube.com/watch?v=iwIObW1kfjI https://drive.google.com/uc?id=1UB9LSXZ9IQFk0CiiJKCIhayrr_Xsa-su');
  }
});
client.on('message', msg => {
  if (msg.content === prefix + '9ar') {
    msg.channel.send('TUTO - Armoured Ruckus : Clericdragoon Gaming https://youtu.be/yBT1sEmZCQQ https://drive.google.com/uc?id=1VQbCxCEhR83bvuZE8jxnuxTMBIySO0AF');
  }
  if (msg.content === prefix + '9aqhph') {
    msg.channel.send('TUTO - AQH Pekka Hog - https://www.youtube.com/watch?v=NMS5HPNI4lE https://drive.google.com/uc?id=1VVV2Op9djadKEVkD6rvIk1PS7dqr2RG8');
  }
  if (msg.content === prefix + '9bbb') {
    msg.channel.send('TUTO - Babyloon : https://www.youtube.com/watch?v=4YNE39Sbs7U&feature=youtu.be 4min37 https://drive.google.com/uc?id=1VaQs6vDqaukeSoInyvkCCHcVfmabGvTG');
  }

  if (msg.content === prefix + '9d') {
    msg.channel.send('TUTO - Dragons : https://youtu.be/HG9Cd8VvLqQ 9min https://drive.google.com/uc?id=1VclrMm9LRmzsvFwShXIUFidtRvdm64YH');
  }

  if (msg.content === prefix + '9db') {
    msg.channel.send('TUTO - Dragons ballons : https://www.youtube.com/watch?v=l6s45xtfmEg Voir aussi une variante, le Lalodrag : =9mbd https://drive.google.com/uc?id=1TqN7yP2lphebV-__RAtIs8y_4TWSi6dY');
  }

  if (msg.content === prefix + '9dh') {
    msg.channel.send('TUTO - DragHo : https://www.youtube.com/watch? https://drive.google.com/uc?id=1Vf2PA7E0Ce6WOygzBWhVj7WuJ6IJzJhe');
  }

  if (msg.content === prefix + '9e') {
    msg.channel.send('TUTO - Excalibur : https://youtu.be/zf18-OVaXhM https://drive.google.com/uc?id=1VjjsvpVdBQZJ9s-Typ0IgEN92ugkmU0c');
  }

  if (msg.content === prefix + '9e-x') {
    msg.channel.send('TUTO - E-xcalibure : https://www.youtube.com/watch?v=Q3sMkImeymA https://drive.google.com/uc?id=1VpLBnekT4JUGCqQUEoaHSeNRXXMQjTwI');
  }

  if (msg.content === prefix + '9ew') {
    msg.channel.send('TUTO  - E-Walk :  à venir Technique : Sur un côté, déposer les sorcières et lE-Drag avec 2 guéris. À lopposé, faire un AQH. Lorsque les côtés sont bien nettoyés, entrer au centre avec le roi et les val-kyries. Voir la variante avec boulistes en cdc, Ladys walk : !9lw https://drive.google.com/uc?id=1VtsNnlVGXU7e_IQAFMv-TVdD2rKlF4dV');
  }

  if (msg.content === prefix + '9f') {
    msg.channel.send('TUTO - Falcon : https://www.youtube.com/watch?v=OwnicZ3iw5k https://drive.google.com/uc?id=1VxnhUg8yyDlCRljnTXWGCC_uOms8e06S');
  }

  if (msg.content === prefix + '9fs') {
    msg.channel.send('TUTO - Freak Show : Zolokotroko https://youtu.be/N2g-M12VI_I https://drive.google.com/uc?id=1TsTnujihWtv4JWAxzQ2FLOuqrUPC28l7');
  }

  if (msg.content === prefix + '9g') {
    msg.channel.send('TUTO - Grundinator : Clericdragoon Gaming https://youtu.be/vg9xZ-HJn_0 https://drive.google.com/uc?id=1VpRey7maS5ugAkKwcb4AApB3bY8CRtrE');
  }

  if (msg.content === prefix + '9gbd') {
    msg.channel.send('TUTO - GoBouDrag : https://www.youtube.com/watch?v=oj2r1tF0bwQ https://drive.google.com/uc?id=1W5LGDafct5XafnqAgfDm0gZ9kNR4F1D8');
  }

  if (msg.content === prefix + '9aqhgh') {
    msg.channel.send('TUTO - AQH GoHog : Gouloulou https://youtu.be/sBGfpG46PiQ https://drive.google.com/uc?id=1Uu-QyQqmVoEWIa197TVf0M1wZ4rGIvDB');
  }

  if (msg.content === prefix + '9gh') {
    msg.channel.send('TUTO - GoHog : https://youtu.be/Uc-Afnmgp2s voir aussi une variante avec 4 soins : =9gh2  ou la version avec plus de golems, Stoned Hogs :=9sh https://drive.google.com/uc?id=1WAQ2BKnjIcZYx6P6wZN-5ix4Bd01k5Ay');
  }

  if (msg.content === prefix + '9gh2') {
    msg.channel.send('TUTO - GoHog : https://youtu.be/kPqiWEZ3Mro Voir une variante avec saut : =9gh  ou avec plus de golems : =9sh https://drive.google.com/uc?id=1WJNRNqk09wIebuqTlcOf-1nOY-a7j83z');
  }

  if (msg.content === prefix + '9gmb') {
    msg.channel.send('TUTO - GoMoBal : https://youtu.be/VPPFLzJo1po https://drive.google.com/uc?id=1WGI0-kWwSMPuVo9Zq0ze4PQrAehP6N4Y');
  }

  if (msg.content === prefix + '9gvb') {
    msg.channel.send('TUTO - GoVaLoon : https://www.youtube.com/watch?v=3JtKHVSBbCs https://drive.google.com/uc?id=1WGtI_Te49DyodLCG26uCRzTm0QkjblpO');
  }

  if (msg.content === prefix + '9gw') {
    msg.channel.send('TUTO - Gowi et ballons https://www.youtube.com/watch?v=NVDf26rh9Ec&feature=youtu.be Voir aussi une variante, le GoWiz : =9gwiz https://drive.google.com/uc?id=1WacFqg-FXu64KIr1Hj7V8EnmHV2kdplY');
  }

  if (msg.content === prefix + '9gwd') {
    msg.channel.send('TUTO - GoWiDrag : https://www.youtube.com/watch?v=BwFug0HJIw0 Notez le changement des sorts, vous navez plus besoin des 2 séismes https://drive.google.com/uc?id=1Tv4DUetpnX3LOwWet_wM9I1-R61dcRWg');
  }

  if (msg.content === prefix + '9gwiz') {
    msg.channel.send('TUTO - GoWiz : https://youtu.be/1XW3jkaodZE Voir aussi une variante : =9gw https://drive.google.com/uc?id=1Tw7ObCOr7TJSGHIfaJUxcTzqhAeM0AgV');
  }

  if (msg.content === prefix + '9gwp') {
    msg.channel.send('TUTO - GoWiPe Classique : https://www.youtube.com/watch?v=HbgSZ6N09dg Voir aussi une variante avec cochons : =9gwph  ou avec ballons : =9gwpb https://drive.google.com/uc?id=1WfGjiIoEhCqScB81t5si7_1HBBVH4xDs');
  }

  if (msg.content === prefix + '9gwph') {
    msg.channel.send('TUTO - GoWiPe avec cochons : https://www.youtube.com/watch?v=Y7uZfG9Q10M Voir aussi une variante sans les cochons : =9gwp  ou avec des ballons :=9gwpb https://drive.google.com/uc?id=1WmU1JtIMl0hjj6NlEW7aH7CFuy_i90f9');
  }

  if (msg.content === prefix + '9gwv') {
    msg.channel.send('TUTO - GoWiVa : https://www.youtube.com/watch?v=pOXHy8YHJl4 Voir aussi une version avec sorcières : =9gwwv https://drive.google.com/uc?id=1WtauCkAJ2BQgMZMw5pJG0Blp8MRS4UET');
  }

  if (msg.content === prefix + '9gww') {
    msg.channel.send('TUTO - GoWiWi : https://www.youtube.com/watch?v=-pRSuOptyp8 https://drive.google.com/uc?id=1Wms5xijsxEZOPdqMau4KIO6rdkrXdpHc');
  }

  if (msg.content === prefix + '9gwwv') {
    msg.channel.send('TUTO - GoWiWiVa : https://www.youtube.com/watch?v=RmW2scKDiI0 https://drive.google.com/uc?id=1X435txYTcOsR4zswffdsjIaChL5hx_YW');
  }

  if (msg.content === prefix + '9hd') {
    msg.channel.send('TUTO - Healer Dominant : Clashing Adda  https://youtu.be/gWtG9NQeJ1k https://drive.google.com/uc?id=1X5CxXYZB8YIgW49aWCKvq5dNtGvVey9q');
  }

  if (msg.content === prefix + '9hghb') {
    msg.channel.send('TUTO - HGHB : https://youtu.be/2oDlzO2Pp5Q https://drive.google.com/uc?id=1X03yAmIgDeaYj4mEVNufUHgfldNRy-bF');
  }

  if (msg.content === prefix + '9hw') {
    msg.channel.send('TUTO - Hogs Witches :  John Chibe https://youtu.be/Xb6c1366w7A https://drive.google.com/uc?id=1XHJ7iKORKmaKs_lvtXqoT3VtXhV2h2tC');
  }

  if (msg.content === prefix + '9lw') {
    msg.channel.send('TUTO - LadyS Walk : Les Mégawinners   https://m.youtube.com/watch?v=EG2wj1dB_QE Voir la variante E-walk avec un électro drag en cdc : =9ew https://drive.google.com/uc?id=1YpUxKBLFv9kR8Q2MHfiduqH_XH-UJacM');
  }

  if (msg.content === prefix + '9mb') {
    msg.channel.send('TUTO - Mobal speed https://www.youtube.com/watch?v=7qW5Eu8mDR8 Voir aussi les versions avec foudres, 2foudres : =9mb2f  ou 4 foudres : =9mb4f https://drive.google.com/uc?id=1XICE7fyn9lzQTheu4p-Z9vzwkZ9gyCLz');
  }

  if (msg.content === prefix + '9mb2f') {
    msg.channel.send('TUTO - Mobal :  2 foudres https://youtu.be/xLf3G82cfhU Voir aussi la version avec 4 foudres : =9mb4f  ou celle avec des speed :=9mb https://drive.google.com/uc?id=1XKvEMUL7b4x9EWyn1FLYyKncnYW3eELk');
  }


  if (msg.content === prefix + '9mbd') {
    msg.channel.send('TUTO - GoMoBal : https://youtu.be/VPPFLzJo1po https://drive.google.com/uc?id=1X_Udh2_6vAFzz0QGexcAFSpL9bdF9SCH');
  }

  if (msg.content === prefix + '9mbg') {
    msg.channel.send('TUTO - LavaLooNion : https://www.youtube.com/watch?v=Ccl9lzcTwRI https://drive.google.com/uc?id=1XY1k-Kk53BlRPDw8Na4bgnGiRGc1_1_H');
  }

  if (msg.content === prefix + '9mbs') {
    msg.channel.send('TUTO - Lavaloon Squelettes : https://youtu.be/IO-hJaAEPh4 https://drive.google.com/uc?id=1XbrmxGlpcmaWI5en8RUJ2ZQwtsxMIEmS');
  }

  if (msg.content === prefix + '9mp') {
    msg.channel.send('TUTO - Mass Pekka : https://www.youtube.com/watch?v=VHO9lOOPbiE https://drive.google.com/uc?id=1Xs39VSIy8z-udVXk2a0gZBmj3kkMHey1');
  }

  if (msg.content === prefix + '9ms') {
    msg.channel.send('TUTO - Mass Skeletons : 16min https://youtu.be/EMzPKyNFNbE https://drive.google.com/uc?id=1XbY3SWFHWz4-_bkwf1H_wtNulNbHlvsm');
  }

  if (msg.content === prefix + '9gwpb') {
    msg.channel.send('TUTO - GoWiPe avec ballons : https://www.youtube.com/watch?v=Fw00fRqC9oA Voir aussi la variante sans ballon : =9gwp ou avec des cochons : =9gwph https://drive.google.com/uc?id=1WacFqg-FXu64KIr1Hj7V8EnmHV2kdplY');
  }

  if (msg.content === prefix + '9ob') {
    msg.channel.send('TUTO - Octababy : Echo Gaming https://youtu.be/q1j3Si4fk8w https://drive.google.com/uc?id=1XcLhZ_RGbMXcwIwZYrJp4OjYBBY9u03I');
  }

  if (msg.content === prefix + '9ph') {
    msg.channel.send('TUTO - Pekka Hogs : https://www.youtube.com/watch?v=32ZTDCjwQD0 https://drive.google.com/uc?id=1Xq8Hf_VhV0IqWDNtmODUuKxCJzz7qjYd');
  }

  if (msg.content === prefix + '9psw') {
    msg.channel.send('TUTO - Pekka Sosotte Walk : https://www.youtube.com/watch?v=32ZTDCjwQD0 https://drive.google.com/uc?id=1Xq8Hf_VhV0IqWDNtmODUuKxCJzz7qjYd');
  }

  if (msg.content === prefix + '9pwbb') {
    msg.channel.send('TUTO - PekkaWalk avec Baby Drags : https://www.youtube.com/watch?v=cEOnqqKM-ho Voir aussi une version avec sorcières : =9psw  ou avec cochons : =9pwh https://drive.google.com/uc?id=1XdHcYg-YInitpzO0_9_jXtCObPsRzi7h');
  }

  if (msg.content === prefix + '9pwh') {
    msg.channel.send('TUTO - PekkaWalk avec cochons : https://www.youtube.com/watch?v=a1D0D6Jb0SA Voir aussi une variante avec sorcières : =9psw  ou avec babydrag : =9pwbb https://drive.google.com/uc?id=1Xz0_W8oqSPmxkxm3fI7E5sOKyIL9kCEV');
  }

  if (msg.content === prefix + '9sgww') {
    msg.channel.send('TUTO - Stoned Gowiwi : https://www.youtube.com/watch?v=yLbHp-lTbZU&t=49s https://drive.google.com/uc?id=1XzWbVHp1ZQlPG0cJF2ILg3c551qPpYMA');
  }

  if (msg.content === prefix + '9sh') {
    msg.channel.send('TUTO - Stoned Hogs : https://youtu.be/8Fl2No6fLpQ https://drive.google.com/uc?id=1YEngSuMSkORk-V5WCU6IdiXsXKqwBya7');
  }

  if (msg.content === prefix + '9ss') {
    msg.channel.send('TUTO - Single Shock : Echo Gaming https://youtu.be/sHffQf24C8o https://drive.google.com/uc?id=1YI-hBsOcMm9-jC4azhJ2Si--sRAoMOcs');
  }

  if (msg.content === prefix + '9v') {
    msg.channel.send('TUTO - Valkyries : https://www.youtube.com/watch?v=Gg6QbyvzVa4 https://drive.google.com/uc?id=1YOavNql1nAjBqA0wWoBEfy8_7_ER-MzO');
  }

  if (msg.content === prefix + '9ws') {
    msg.channel.send('TUTO - Witch Slap ou Sorcières walk : https://www.youtube.com/watch?v=jyhhp_EGGGk&t=4s https://drive.google.com/uc?id=1JWboyo_S261oNVlorGi7aAd6Ev6C3c45');
  }

  if (msg.content === prefix + '13aqhm') {
    msg.channel.send('https://www.youtube.com/watch?v=4nIusG14vgo&feature=youtu.be iTzu [ENG] - Clash of Clans');
  }

 

    if (msg.content === prefix + '9mb4f') {
      msg.channel.send('TUTO - Mobal : Mobal 4 foudres https://youtu.be/dc7JqPqjPyM Voir aussi la version avec 2 foudres : =9mb2f  ou celle avec des speed : =9mb https://drive.google.com/uc?id=1XQPUZcrRPbgTKERPzZAmopdFCOoiwKNF');
    }
  
});

client.on('message', msg => {

  ///Bases

  if (msg.content === prefix + 'b10gdc') {
    msg.channel.send('https://drive.google.com/uc?id=1oYgtfAHeuHrMahrim0_N5wTOo7z73acT lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AWB%3AAAAAJgAAAAF3K3yc0mWZt39Euvtwkce1');
  }

  if (msg.content === prefix + 'b10gdc1') {
    msg.channel.send('https://drive.google.com/uc?id=1CW0TU_O1hz4imbH6gYTBa9GWQAqbT8m- lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AWB%3AAAAAGwAAAAGDhqDpSaR4YBfWCXMjud5y');
  }

  if (msg.content === prefix + 'b10gdc2') {
    msg.channel.send('https://drive.google.com/uc?id=13nTFXUAqO8O5W2A7CY3P-vnTzC6XlltF lien de la base :  https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAARAAAAAElXulEf7pbloxWALdzN_dU');
  }

  if (msg.content === prefix + 'b10gdc3') {
    msg.channel.send('https://drive.google.com/uc?id=1GlA4xOSOFfw1Wr6edxlifVN7BaXtw7yW lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAARAAAAAElXuCw7Ti0OCQud0fpWUDg');
  }

  if (msg.content === prefix + 'b10gdc4') {
    msg.channel.send('https://drive.google.com/uc?id=1c3HZN-12aCMXAYsZeZLFeBwVQhj9LUMw lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AWB%3AAAAARAAAAAElXuw0WIm-_MqZwm5kmI9-');
  }

  if (msg.content === prefix + 'b10farm') {
    msg.channel.send('https://drive.google.com/uc?id=10q2SB0Eim0-PGiy1u1nAsbQdEOxZtzJl lien de la base :  https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAAUAAAAAD2HgUANW4xZXR6-bvPisBm');
  }

  if (msg.content === prefix + 'b10farm1') {
    msg.channel.send('https://drive.google.com/uc?id=1w26EzZ9v254ANLKBuXe7WlaKMgkU8YFP lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAAGQAAAAF4p6_3Do-ThJDWzFePOzmo');
  }

  if (msg.content === prefix + 'b10farm2') {
    msg.channel.send('https://drive.google.com/uc?id=107v-aUgswzgwTxCTgPTc7MPy2lWd6bt7 lien de la base : https://link.clashofclans.com/pt?action=OpenLayout&id=TH10%3AHV%3AAAAAOAAAAAFNjg5yU3NQ1jIj6PTB3cpv');
  }


  if (msg.content === prefix + 'b10farm3') {
    msg.channel.send('https://drive.google.com/uc?id=1AOz_KiWbLWhnXCvZ21yKs2sb_7GV_PBA lien de la base : https://link.clashofclans.com/id?action=OpenLayout&id=TH10%3AHV%3AAAAADAAAAAGXcF_0_iwTVdgPFVHobT6U');
  }

  if (msg.content === prefix + 'b10rush') {
    msg.channel.send('https://drive.google.com/uc?id=1-7DJUqipO0iJaATPfDBBhe2-Vwi_FuRw lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAARwAAAAEi-SRhD7gsi5VgqSuaX47y');
  }

  if (msg.content === prefix + 'b10rush1') {
    msg.channel.send('https://drive.google.com/uc?id=1nybEzf0RNMo3Pu2p2dQr9zObcp9CkQt2 lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAAOgAAAAE1lE1E_CtPSA0gKkl6W04T');
  }

  if (msg.content === prefix + 'b10rush2') {
    msg.reply('https://drive.google.com/uc?id=19QnBEN_XjD3humzkj-vPZ2jUfziZktLc lien de la base : https://link.clashofclans.com/nl?action=OpenLayout&id=TH10%3AHV%3AAAAADgAAAAGQD72Rn7cXwq6RIpUAiMbL');
  }
  if (msg.content === prefix + 'b10gdc5') {
    msg.channel.send('https://drive.google.com/uc?id=1ymY8VROlyrpnu8JB1XRKooZ8MCaaAUq5 lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AWB%3AAAAAHgAAAAF-RSnMnlqhub7WrQyYGB3b');
  }
  if (msg.content === prefix + 'b11rush') {
    msg.channel.send('https://drive.google.com/uc?id=178PwyV8YqE9GyFn4z8s13NP5FVIQQuLO lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAAKwAAAAFcfYFd1oxks5vvc_t64ZoS');
  }

  if (msg.content === prefix + 'b11gdc') {
    msg.channel.send('https://drive.google.com/uc?id=1JIVXFPDp0yO-0p5V6JtIA53VI0qDsgXW lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AWB%3AAAAANwAAAAFB_11fvn9cKtRZclQW3TkG');
  }

  if (msg.content === prefix + 'b11farm') {
    msg.channel.send('https://drive.google.com/uc?id=1SYdOlKlpqVPE-Uqp3kL_0Y_vcXPyKFS_ lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAARgAAAAEghRZcws4HVX3KU3qyFX6G');
  }

  if (msg.content === prefix + 'b11farm1') {
    msg.channel.send('https://drive.google.com/uc?id=1FpY_Knsos5_Jyex5e_faOe5OpelEMabA lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAAIgAAAAFxmH9kiTZ7D-x239C7iX8L');
  }

  if (msg.content === prefix + 'b11gdc2') {
    msg.channel.send('https://drive.google.com/uc?id=1NzcKhF9YWlvGmXxMom2TfaC5nfyqtCSM lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AWB%3AAAAAFAAAAAGGS-KWzTX5CdxGF1YO42j5');
  }

  if (msg.content === prefix + 'b11gdc3') {
    msg.channel.send('https://drive.google.com/uc?id=133n-xA_3GH5xuYvzfMJkJ0VAfwK1CjRc lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAFAAAAAGGClAQNa5UDpVc0hzuK3N4 ');
  }

  if (msg.content === prefix + 'b11gdc4') {
    msg.channel.send('https://drive.google.com/uc?id=1frG21f4OcmWIHfGnDMnrWBt8G-ZJ5i_c lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AWB%3AAAAACgAAAAGoiMkykp1vm0SOAISfQWaI');
  }

  if (msg.content === prefix + 'b11gdc5') {
    msg.channel.send('https://drive.google.com/uc?id=1oXQdhQDFUurDigYSU4PQ4CG7LB1r1uwa lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AWB%3AAAAAFAAAAAGGS-j8GdnpxJkrCzcnbbdS');
  }

  if (msg.content === prefix + 'b11rush1') {
    msg.channel.send('https://drive.google.com/uc?id=1Ec40khoQFGOslOGSOzBvJLIzsxa_RDbC lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AWB%3AAAAAQAAAAAE2RgOOGDCC7OjrWJYmDj0v');
  }

  if (msg.content === prefix + 'b11farm2') {
    msg.channel.send('https://drive.google.com/uc?id=1zy7Xc00yQVYWrxaown-8NYVOq6eVib6n lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAARgAAAAEghPJEyP3n6GVUTGAO-F0O');
  }

  if (msg.content === prefix + 'b11gdc6') {
    msg.channel.send('https://drive.google.com/uc?id=1sSdK8F0eBFWiTDxN2FkYrx8bDawm-Aj6 lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAARgAAAAEf5vcVxPakNtYXBBvIClKX');
  }

  if (msg.content === prefix + 'b11rush2') {
    msg.channel.send('https://drive.google.com/uc?id=19Y5kILwuyAHcqVu7Hi21_8ExeFtZ5P-E lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAFAAAAAGGS_qc5Jfaa1zojhOo-Tl7');
  }

  if (msg.content === prefix + 'b11rush3') {
    msg.channel.send('https://drive.google.com/uc?id=1ex8hoaP-Aps1ZtTO6E3LMyaVL8on3TS7 lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAACgAAAAGlGcuGdaOlB4JeP6o7P3-Y');
  }


  if (msg.content === prefix + 'b12gdc') {
    msg.channel.send('https://drive.google.com/uc?id=1HZiOI3r3_t0D5P8boNMit15rVCezpB9V lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAALQAAAAFrorB4Il-y-kTIihe7uj_6');
  }
  if (msg.content === prefix + 'b12gdc1') {
    msg.channel.send('https://drive.google.com/uc?id=1hMwCYgZm8zu_vgE0dOBG29XnoStkaJ-3 lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAALQAAAAFrosChKivPzohCpfoBXVFF');
  }

  if (msg.content === prefix + 'b12gdc2') {
    msg.channel.send('https://drive.google.com/uc?id=15Fp-Z7-327iY_CwS8ue28OL375cQqmVw lien de la base : https://link.clashofclans.com/de?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGG4q_Cwokzgl99U0_W4xYL');
  }

  if (msg.content === prefix + '9eds') {
    msg.channel.send('TUTO - ELECTRO SMASH: John-Chibe https://youtu.be/cN91HfnYquY https://drive.google.com/uc?id=1Vgtg18Zrtmum5iK-l8Hc4AWoDSxt0QDD');
  }

  if (msg.content === prefix + 'b12farm') {
    msg.channel.send('https://drive.google.com/uc?id=148FSkwDnV7vjzlAGzk5Mq_OWbQC9eiml lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAALQAAAAFrozGbjFjotWG4og_VDlZU');
  }

  if (msg.content === prefix + 'b12gdc3') {
    msg.channel.send('https://drive.google.com/uc?id=1kkDd0s2RPdYMnVb-bghRWr53XzJacMEK lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AWB%3AAAAALQAAAAFro0JhKtrKvEPUWL7H-Y0w');
  }

  if (msg.content === prefix + 'b12farm1') {
    msg.channel.send('https://drive.google.com/uc?id=15HP2c6DLjSEDtmoGcvQfwRJItJGdAsgu   lien de la base :https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAALQAAAAFrheXA6vH6nA-XoVybDlHR ');
  }

  if (msg.content === prefix + 'b12farm2') {
    msg.channel.send('https://drive.google.com/file/d/1j4-KXXZRiOkRlq7fQeKokItrZ1B3Uv2t/view?usp=drivesdk lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAALQAAAAFromy5J1xfY0O4Gw__d8Vf');
  }

  if (msg.content === prefix + 'b12farm3') {
    msg.channel.send('https://drive.google.com/uc?id=1LXrD1UR-BnTL_DOfhLMRzirWp1VJA59g lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAADwAAAAGWXTyOZW2X-oVVnUspLqWu');
  }

  if (msg.content === prefix + 'b12gdc4') {
    msg.channel.send('https://drive.google.com/uc?id=1EiotpXb-lNcnQJmVCdPqa0aktKBzcHt8 lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AWB%3AAAAALQAAAAFrhhpLoeMk6TEQHy9W9rR4');
  }

  if (msg.content === prefix + 'b12gdc5') {
    msg.channel.send('https://drive.google.com/uc?id=1aookCrccNrX1JkNSdnNkUBRYls7ttAvT lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AWB%3AAAAALQAAAAFropXiXxtSg7GcI1F6v7JP');
  }

  if (msg.content === prefix + 'b12gdc6') {
    msg.channel.send('https://drive.google.com/uc?id=1K33Md8G_DW8yQSZnWhtI5AUPJfZTs9_C lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAALQAAAAFroybuh_6j6RX8mLVZSete');
  }

  if (msg.content === prefix + 'b12farm4') {
    msg.channel.send('https://drive.google.com/uc?id=1XTROJGRxrExjrYuZO8ChHawIy087L-GC lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAAJgAAAAF8LGfmNxznIPJCTbgB-Tpk');
  }

  if (msg.content === prefix + 'b12rush') {
    msg.channel.send('https://drive.google.com/uc?id=1byYWUOw36hseCTTb1WCQOp19mfZmmOT8 lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAALQAAAAFronW7nD4Cs841Yu2bsE6t');
  }

  if (msg.content === prefix + 'b12farm5') {
    msg.channel.send('https://drive.google.com/uc?id=156rxNw-mOVq5eYMXrEqSWMoj8JoOOEIu lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAAJgAAAAF8K-zJm2JwqkMKOGOg7oOh');
  }

  if (msg.content === prefix + 'b12rush1') {
    msg.channel.send('https://drive.google.com/uc?id=1WFiJwM3EEHBPuN06jyShQdJR8qmgx3r9  lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAFgAAAAF3kVplqEIaziBOuQWa8bnc ');
  }

  if (msg.content === prefix + 'b12rush2') {
    msg.channel.send('https://drive.google.com/uc?id=1dpArN_ldM1Kz7cWcI6vSfVfu9VTb7G3X lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAAJgAAAAF8Kx6UKeMTzRxU4yDgZEn6');
  }

  if (msg.content === prefix + 'b12rush3') {
    mmsg.channel.send('https://drive.google.com/uc?id=1Pz0gC4tH5HxHlyilgwb8y-PxFE_rhEQf lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AWB%3AAAAAJgAAAAF15W40z6TdR5VNm8ivTzDy');
  }

  if (msg.content === prefix + 'b8gdc') {
    msg.channel.send('Hdv à l’extérieur, entouré de pièges. Château de clan centré. Roi bien protégé et centré ce qui est bien contre les cochons. Double rangée de murs pour repousser les troupes. Defense : CDC: 1 dragon, 1 ballon https://drive.google.com/uc?id=1MGIdBdmEhh9JF5ySJHYosjL0YPLfoFux https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAAEAAAAAGOQY8Um8wzefJOb7T_Z5tU');
  }
});


client.on('message', msg => {
  if (msg.content === prefix + 'b8gdc1') {
    msg.channel.send('Hdv sur le coté      Château de clan centré.     Les anti-aériennes sont proche c’est fait exprès pour que le souffleur disperse les dragons et les ralentis. Deux bombes géantes collées l’une à l’autre, efficace contre les cochons.          Il faut une très bonne P1 qui résiste aux défenses et aux deux bombes géantes et le château de clan pour réussir son attaque.        Defense : CDC: golem de glace un bébé dragon     https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AHV%3AAAAAVwAAAADiCitZDojvjU3hTGS6pTiW https://drive.google.com/uc?id=1494zNiyNO-QyOTckXXKlQo1MwfAl4doo');
  }

  if (msg.content === prefix + 'b8gdc2') {
    msg.channel.send('HDV  protégé par des murs.  château de clan bien centré.  anti-aérienne protégée par un souffleur . réservoirs à l’extérieur donc ça ralenti les troupes village qui fait bien tourner les troupes.      Defense CDC: dragon deux ballons      https://drive.google.com/uc?id=1z6UHKdvYZ09s3AfxhRgJ1KtRpCYRT0fl https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AHV%3AAAAAWgAAAADi8x9DqveMzNhuJachFgff');
  }

  if (msg.content === prefix + 'b8gdc3') {
    msg.channel.send('hôtel de ville à l’extérieur coté du canon. Anti-aérienne séparé et protéger par un souffleur. réserves dehors pour ralentir les troupes.  deux bombes géantes collées l’une à l’autre, efficace contre les cochons. Double murs pour bien protégée les défenses et empêche les troupes de rentrer. Château de clan bien centré.       Defense Cdc un dragon  et deux ballons     https://drive.google.com/uc?id=1ymVE2ncgkweBc497RGFto1Wx_cJ6qIWd https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AHV%3AAAAAWgAAAADi8trjcZZvXqdCXR14VHp7');
  }

  if (msg.content === prefix + 'b8gdc4') {
    msg.channel.send('Hotel de ville à l’extérieur  avec le roi, protéger par une tour d’archer et canon, entouré par des bâtiment  donc pour ralentir  les troupes.  Château de clan bien centré pour protéger le village. anti-aérienne protégée par un souffleur et par des bombes aériennes. cabane dans les cotés, votre adversaire peut risquer d’un fail time.       CDC: Dragon et ballon ou un golem de glace avec un bébé dragon      https://drive.google.com/uc?id=1idSuuRbpaVReegEYPeVN9SdYHAN4H0fG https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AHV%3AAAAAWgAAAADi8d0kvEx2sYHmOtvbcDup');
  }

  if (msg.content === prefix + 'b8gdc5') {
    msg.channel.send('Château de clan et HDV centré Village espacé pour faire tournée les troupes, pour empêche les joueurs de doublé. réserves dehors pour ralentir les troupes et les faire tournée. roi  protégé par des tesla et 2 tours d’archers et une tour de sorcier.       Defense un golem de glace et un bébé dragon ou un dragon avec deux ballons        https://drive.google.com/uc?id=14F9xsIrGCa_-VqT_ljsnMSDSZyrZFf5o https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AHV%3AAAAAWgAAAADi8nx09hdVDgr4E7lG4NL4');
  }

  if (msg.content === prefix + 'b8gdc6') {
    msg.channel.send('Hdv à l’extérieur facile à prendre avec le roi. Château de clan bien centré avec 3 bombes ce qui est vraiment efficace contre les cochons. Donner le roi et l’HDV pour piéger l’adversaire, 3 bombes pour tuer tous les cochons même avec un soin. Anti-aériennes bien séparées, souffleur bien placé contre le full dragons. Village ni trop espacé ni trop serré.    CDC: golem de glace un bébé dragon        https://drive.google.com/uc?id=1BU6o_-g5vGtYjdrve1dbTUKHjGOTlLFf https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAAVwAAAADiCkNr9Ihal9TxkQz_N5sC');
  }

  if (msg.content === prefix + 'b8gdc7') {
    msg.channel.send('Hotel de ville mis a coté. Village espacé pour but de faire tourner les troupes. Château de clan centré  Anti-aérienne protégée par un souffleur pour ralentir les troupes aériennes. Deux bombes collées efficace contre les cochons. Le roi de l’autre coté de l’hôtel de ville, si on l’attaque en cochons  la p1 (Partie 1) ne sera pas au top, l’adversaire risque de faire une étoile si ça rentre du coté du roi, deux étoiles du coté de l’hdv.    CDC: dragon ballon ou un golem de glace et un bébé dragon     https://drive.google.com/uc?id=1uC3QoZOChzy9YQAE3iXjTxUPopwgkpn6 https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAAVwAAAADiCmdsE6beaso532AGdV2C');
  }

  if (msg.content === prefix + 'b8gdc8') {
    msg.channel.send('Hotel de ville et roi donné. Anti-aérienne protégée par le souffleur  Château de clan centré. réservoirs de coté pour  ralentir les troupes et laisser les troupes faire des dégâts.        CDC: Golem de glace un bébé dragon ou dragon ballon         https://drive.google.com/uc?id=1Iti2UfYF998WyDhWXGtfPHbap2iAA4GJ https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AHV%3AAAAAEAAAAAGOQPJ_sBZbwdMOqFPuHW1F');
  }

  if (msg.content === prefix + 'b8gdc9') {
    msg.channel.send('Hdv à l’extérieur avec le roi parce qu’il est protégé par 3 teslas château de clan bien centré  les anti-aériennes espacées et protégées par un souffleur les réserves dehors parce que ça ralenti les troupes sol et air.  Bombe séparé    Cabane en coin.     Dans le château prenez un golem de glace et un bébé dragon       https://drive.google.com/uc?id=1ReaWNZvYXXc14KlumP_TveclPVaIrdpg https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AHV%3AAAAAEAAAAAGOQVKusrCsAx_HNQeHQaZa');
  }

  if (msg.content === prefix + 'b8gdc10') {
    msg.channel.send('Hdv de coté Château de clan centré. Les anti-aériennes un peu proche c’est fait exprès pour le souffleur qui va disperser les dragons et les ralentir. Deux bombes géantes collées l’une a l’autre, efficace contre les cochons. Va falloir une  très bonne p1 qui résiste  au défense et au deux bombes géante et le château de clan pour réussir son attaque.       CDC: golem de glace un bébé dragon    https://drive.google.com/uc?id=1GAiF5IOZSmTPRs2PEL1Rm7dOAzl7BLYF https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AHV%3AAAAAVwAAAADiCitZDojvjU3hTGS6pTiW');
  }

  if (msg.content === prefix + 'b8gdc11') {
    msg.channel.send('3 anti-aériennes proche  protégées par un souffleur Village espacé pour but de faire tourner les troupes et avoir au maximum une étoile.      Les réserves dehors  pour ralentir les troupes aériennes et sol.     CDC: dragon un ballon.        https://drive.google.com/uc?id=1tNRRFzsa_PY0VBdLVfcSX1tzZQ369SIN https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAANgAAAAFJ46Z41pmdTRPTZ4U1W46E');
  }

  if (msg.content === prefix + 'b9gdc') {
    msg.channel.send('https://drive.google.com/uc?id=1yq0jSbZwmY4JhTYUqg4e4h0C9hUyT4Mn lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAIQAAAAFtWN2ru_FsvAIfbTg012Iz');
  }

  if (msg.content === prefix + 'b9gdc1') {
    msg.channel.send('https://drive.google.com/uc?id=1t6_6MW9bVmwWMQMAGWbCiICTigI5Wfok lien de la base : https://link.clashofclans.com/pt?action=OpenLayout&id=TH9%3AWB%3AAAAAJAAAAAFsUTwsXHOR2Ym793ZpiCFi');
  }

  if (msg.content === prefix + 'b9farm') {
    msg.channel.send('https://drive.google.com/uc?id=1YwGN4nhRWQ9YQazdyOd7H_-3ov61Z_Ub lien de la base https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAFwAAAAGKrhLJI7Rkx7R0sViVkMUc');
  }

  if (msg.content === prefix + 'b9farm1') {
    msg.channel.send('https://drive.google.com/uc?id=1yCqOGpHIbWQD7d24FHjoPmi_wQvcmqGW lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAVAAAAADgdogzjCzcf4TN-2953Wv1');
  }

  if (msg.content === prefix + 'b9gdc2') {
    msg.channel.send('https://drive.google.com/uc?id=1jc2BwZrg6NbbGEEeNqYUEfxQZknG32UN lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AWB%3AAAAARQAAAAEgHyQr5SiDXZ4n6g3AFoPr');
  }


  if (msg.content === prefix + 'b9gdc3') {
    msg.channel.send('https://drive.google.com/uc?id=1ApnfhI3MTivUYIE12kcQPhkcBVqsudKM lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAIgAAAAFu3Gy2eJ7coZnmDqb6vqD5');
  }

  if (msg.content === prefix + 'b9farm2') {
    msg.channel.send('https://drive.google.com/uc?id=1c_oADeIX8HSKBDZd7G18KXzf5Vk3fm4l lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAUgAAAADuLotETvgkTpn0_XZdMzU5');
  }

  if (msg.content === prefix + 'b9farm3') {
    msg.channel.send('https://drive.google.com/uc?id=1LFm6dldOCRP6uW4Otr2JM0NNXKCfGvzh lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAUgAAAADuiQ7BlHsIjG7VmuJtrcVd');
  }

  if (msg.content === prefix + 'b9gdc4') {
    msg.channel.send('https://drive.google.com/uc?id=1jpKoc7ytkMXjhStW_KiARsTJI1WmvXhy lien de la base : https://link.clashofclans.com/fr?action=OpenLayout&id=TH9%3AHV%3AAAAAOQAAAAE6Nwt8koyJv2anxiUTveIH');
  }

  if (msg.content === prefix + 'b9gdc5') {
    msg.channel.send('https://drive.google.com/uc?id=13KUZs4jrKVKFJID8N7z8VZ89kG1iqNYn lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAWQAAAADiLK5M5i5F3knNjhPILu10');
  }

  if (msg.content === prefix + 'b9gdc6') {
    msg.channel.send('https://drive.google.com/uc?id=1MFWAPy8bwH1gT3nwm4XHEkW6GNtZWVRb lien de la base : https://link.clashofclans.com/de?action=OpenLayout&id=TH9%3AHV%3AAAAADgAAAAGbUMXcbZlGd-tXcHXb_tGP');
  }

  if (msg.content === prefix + 'b9farm4') {
    msg.channel.send('https://drive.google.com/uc?id=11oIgUfApo-Mz8AD3X_onmzTMIynhuti3 lien de la base : https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAWQAAAADco9mXA932G5Q1zqj39U2Z');
  }

  if (msg.content === prefix + 'b13gdc') {
    msg.channel.send('https://drive.google.com/uc?id=1gBboR6D-4REfdGsguMLC-JUIAyJ2f7il lien de la base : https://link.clashofclans.com/de?action=OpenLayout&id=TH13%3AWB%3AAAAAGQAAAAGNZrOnAn8KFnqaY2w9u-h8');
  }

  if (msg.content === prefix + 'b13farm') {
    msg.channel.send('https://drive.google.com/uc?id=1ekYflBexe_UjMGNFe_wWIT-cV0sP0fHI lien de la base : https://link.clashofclans.com/de?action=OpenLayout&id=TH13%3AHV%3AAAAAGQAAAAGNZqyiD9-DtRIJvOKxCAxh');
  }

  if (msg.content === prefix + 'b13gdc1') {
    msg.channel.send('https://drive.google.com/uc?id=1KT_YwwfYPvMBKcJuAisv8n6B_6APUoNg lien de la base : https://link.clashofclans.com/de?action=OpenLayout&id=TH13%3AWB%3AAAAAGQAAAAGNZqgVrik5wmjsP4MDFSYR');
  }

  if (msg.content === prefix + 'b13farm1') {
    msg.channel.send('https://drive.google.com/uc?id=1rcNv_kqJQ2y988s612-_g_pdvcn4ZRhR lien de la base :  https://link.clashofclans.com/de?action=OpenLayout&id=TH13%3AHV%3AAAAAGQAAAAGNZqMf0JQuyBGNF1xKzxsj');
  }

  if (msg.content === prefix + 'b13rush') {
    msg.channel.send('https://drive.google.com/uc?id=1yletSxsP1N3rjEmuUaNLkjmyfPwjQPsu lien de la base : https://link.clashofclans.com/de?action=OpenLayout&id=TH13%3AWB%3AAAAAGQAAAAGNZo7ufDSf4sPDIocBm4RM');
  }

  if (msg.content === prefix + 'b13farm2') {
    msg.channel.send('https://drive.google.com/uc?id=1-GYtAox7q-5RelaD7fTzARqWpFJpSLyT lien de la base : https://link.clashofclans.com/de?action=OpenLayout&id=TH13%3AHV%3AAAAAGQAAAAGNZlnY9Q6GL7zeDdnDnyp3');
  }

  if (msg.content === prefix + 'b13gdc2') {
    msg.channel.send('https://drive.google.com/uc?id=1dAFkYjBdNXUIgiQRLg9AXALVds5oUYpv lien de la base : https://link.clashofclans.com/de?action=OpenLayout&id=TH13%3AHV%3AAAAAGQAAAAGNZmxJPBfhRk4__s4H8l5E');
  }

  if (msg.content === prefix + 'b13gdc3') {
    msg.channel.send('https://drive.google.com/uc?id=17DT_cAa-3yI0FMNkbuXI0gW8U_aNsgYr lien de la base : https://link.clashofclans.com/de?action=OpenLayout&id=TH13%3AWB%3AAAAAGQAAAAGNZgNHVjTlfio6U3YZZBbi');
  }

  if (msg.content === prefix + 'b13farm3') {
    msg.channel.send('https://drive.google.com/uc?id=1yYX_O0AF73Bqh5kAQwIevr2TBzfjq0m0 lien de la base : link.clashofclans.com/de?action=OpenLayout&id=TH13%3AWB%3AAAAAGQAAAAGNZISbWI0_GG1h6HolqlLi');
  }

  if (msg.content === prefix + 'b13gdc4') {
    msg.channel.send('https://drive.google.com/uc?id=1-zNyVFOQ1ptZYsp5cISzgVt1CeNF5os9 lien de la base : https://link.clashofclans.com/de?action=OpenLayout&id=TH13%3AHV%3AAAAAGQAAAAGNZR9stclXbmh__olHodNp');
  }

  if (msg.content === prefix + 'b9gdc7') {
    msg.channel.send('https://drive.google.com/uc?id=1EPQ2PYR92eW0K8uHhCcGzj357EyM-s7C\n Lien de la base: https://link.clashofclans.com/de?action=OpenLayout&id=TH9%3AWB%3AAAAADgAAAAGbUilnXA12NioJd6nczqGe');
  }

  if (msg.content === prefix + 'b10gdc6') {
    msg.channel.send('https://drive.google.com/uc?id=1eqQNpNq69CVDMV60Ha2iztubRi8n0xc- \n Lien de la base: https://link.clashofclans.com/de?action=OpenLayout&id=TH10%3AWB%3AAAAAEQAAAAGb94rL8vLZEgTdhnGtEWr1');
  }

  if (msg.content === prefix + 'b11farm3') {
    msg.channel.send('https://drive.google.com/uc?id=1bkjEVk6PIhqily1vAIXR_MuasjkLc9sp\n lien de la base: https://link.clashofclans.com/de?action=OpenLayout&id=TH11%3AHV%3AAAAAOwAAAAE0lUtu8OpT5rObj-hnXid4 ');
  }

  if (msg.content === prefix + 'b13gdc5') {
    msg.channel.send('https://drive.google.com/uc?id=1mlicULovcOvIVg-une4dmJzGSxulIuNz\n lien de la base: https://link.clashofclans.com/de?action=OpenLayout&id=TH13%3AWB%3AAAAAGQAAAAGNZdqy3KEpLVVCvLS0zgXe');
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'b12MCES') {
    msg.channel.send('https://drive.google.com/uc?id=1tNszYZrGgXYU5rhvpsw5d88Fj7xZi9eF\n lien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHyBYoME4hSxeDiIl_qY-r ');
  }

  if (msg.content === prefix + 'b12MCES1') {
    msg.channel.send('https://drive.google.com/uc?id=16Lr5AKxgXo40s5eahTnhPq3fQe6-Flq0\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHx3BC5Nm80l-bIXNeDvVh');
  }

  if (msg.content === prefix + 'b12MCES2') {
    msg.channel.send('https://drive.google.com/uc?id=1b5830kB4QhwHtyCdu_18XgvoXt0U0tox\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHxrJsfKqG_Lu8cerk_5Dg');
  }

  if (msg.content === prefix + 'b12MCES3') {
    msg.channel.send('https://drive.google.com/uc?id=1zw07hb2reYdXuQ_IbUTgZUdVZ2w13FkD\n lien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHxf7xt8OxKPU_y7Kv0XlN ');
  }

  if (msg.content === prefix + 'b12MCES4') {
    msg.channel.send('https://drive.google.com/uc?id=1erDMEZtIpVZeZ9QZK7VktULwwiFzIojP\n lien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHxRAzEoNiVRPW_6v9FDft');
  }

  if (msg.content === prefix + 'b12MCES5') {
    msg.channel.send('https://drive.google.com/uc?id=1tCYKdeB2qIrr83SfX3TmE7R703mYN6Zw\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHxJnbbF2IlVrLKrkaVOFO');
  }

  if (msg.content === prefix + 'b12MCES6') {
    msg.channel.send('https://drive.google.com/uc?id=1Pk0yAPPk4W1UeLBkD1MjLOP6LQuhrmlJ\n lien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHxCOqdjyHsplvYsl_b5IS ');
  }

  if (msg.content === prefix + 'b12MCES7') {
    msg.channel.send('https://drive.google.com/uc?id=1yoIXSrEcSFheKfZ9vXWYDbbNk3fvt9gq\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHw7xfW56PFn4ZkcXeJ9YA');
  }

  if (msg.content === prefix + 'b12MCES8') {
    msg.channel.send('https://drive.google.com/uc?id=1ZUTiXPGOk0Wi09clrEljqvnP9xfy2McC\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHtJwEK7e0iP85u1pZK61o');
  }

  if (msg.content === prefix + 'b12MCES9') {
    msg.channel.send('https://drive.google.com/uc?id=1C4D-RbHfTInVG2_IrUYJviMabXS2dnl_\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHtCyUv6xCyyWyX435MRMd');
  }

  if (msg.content === prefix + 'b12MCES10') {
    msg.channel.send('https://drive.google.com/uc?id=1cD-WNSru8aDpurasOH_U1rx58mCAr-PB\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHsb2TtlHCVRXYbfL31-Vp');
  }

  if (msg.content === prefix + 'b12MCES11') {
    msg.channel.send('https://drive.google.com/uc?id=1AeNUIEI6VKnANuXHAljst6x3FZFsXJjM\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHsI7WklhNltcThVN_ZHzM');
  }

  if (msg.content === prefix + 'b12MCES12') {
    msg.channel.send('https://drive.google.com/uc?id=12GqNoh10XElBmXRmWxyrqXO-W5zzquQP\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AWB%3AAAAAGQAAAAGHrvLk3Ssh49u0LaEqnG9E');
  }

  if (msg.content === prefix + 'b12MCES13') {
    msg.channel.send('https://drive.google.com/uc?id=1-TQzHEvyvjc8nyTD2WRz0NR2xVD5dzhX\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHrhoyFExYOgbb9PbOFsiW');
  }

  if (msg.content === prefix + 'b12MCES14') {
    msg.channel.send('https://drive.google.com/uc?id=1BKl3PWQH9nlt5-kmGh2ltMZWIsUhsJy9\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHrXc1vutxKJc0rhmy4oKD ');
  }

  if (msg.content === prefix + 'b12NOVA') {
    msg.channel.send('https://drive.google.com/uc?id=1rNKcrNRHkKN-_8bZPIbwbTbUxO9-EAqH \n lien de la base :https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHyQtvZwXuwiE1k4zkvm2u');
  }

  if (msg.content === prefix + 'b12NOVA1') {
    msg.channel.send('https://drive.google.com/uc?id=1QNg1iheSq5K1SBWC6ihwdWLsCJAQnKQh \nlien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHx6_AWrZ8c0y9U-n_PP33');
  }

  if (msg.content === prefix + 'b12NOVA2') {
    msg.channel.send('https://drive.google.com/uc?id=1jep1hJm0VW4YMeezRAP6Lg5DJm3mudOj\nlien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHxusA6pTm_pyO6AA_4tvS ');
  }

  if (msg.content === prefix + 'b12NOVA3') {
    msg.channel.send('https://drive.google.com/uc?id=1ED6EYsi-eAQnE_UOp1SPPM25hD_p5bZx\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHxnUbuewEojm_UDeeaTET ');
  }

  if (msg.content === prefix + 'b12NOVA4') {
    msg.channel.send('https://drive.google.com/uc?id=1LBqKCtvrDMyNIzp4V0-f8h154lb6FWvT \nlien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHxbqdx9qCjWmGU5ZZmR6C ');
  }

  if (msg.content === prefix + 'b12NOVA5') {
    msg.channel.send('https://drive.google.com/uc?id=131QjayZZNv1zjM9l4F4RMhW7ZF52FEy4 \nlien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHxF9bNh1nYMZXlM7T9-e-');
  }

  if (msg.content === prefix + 'b12NOVA6') {
    msg.channel.send('https://drive.google.com/uc?id=15iX9HIGmFxJQteImuwDO44Q1bIBApk_C\nlien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHw-7NQD5Krd42FDl-4Zxj');
  }

  if (msg.content === prefix + 'b12NOVA7') {
    msg.channel.send('https://drive.google.com/uc?id=1Gayy6juNeSaNA0mYiEDu71rARoCok_j3\n lien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHw5HoBzx7R6DgpFvW89rj');
  }

  if (msg.content === prefix + 'b12NOVA8') {
    msg.channel.send('https://drive.google.com/uc?id=129u5MKwOYC7vNzMAzrsVjzrQbpzpA6F1\nlien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHtG1tER_pelrD-yXYfEw4 ');
  }

  if (msg.content === prefix + 'b12NOVA9') {
    msg.channel.send('https://drive.google.com/uc?id=1GAKwXQlA7xcaTTOR7jyckGiX7s2p86fO\n lien de la base :https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHs4031lQGj9K2bF4Y_mdA');
  }

  if (msg.content === prefix + 'b12NOVA10') {
    msg.channel.send('https://drive.google.com/uc?id=1sMcf1zDRyKluSF3KtVUbcgHRxEsR2-Ra\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHsepJha-ZS8yTxc2wK9yU');
  }

  if (msg.content === prefix + 'b12NOVA11') {
    msg.channel.send('https://drive.google.com/uc?id=1jCwrncck60RQuj3RYEo_Qh-GJPnt94My \nlien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHsNYSoE4w0eShN6-7kzgi ');
  }

  if (msg.content === prefix + 'b12NOVA12') {
    msg.channel.send('https://drive.google.com/uc?id=1DyypDli5_LR63Fu_odnDTagOdyu2xk0n\n lien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHr9h6R9M-qXbUmLAm2CyU ');
  }

  if (msg.content === prefix + 'b12NOVA13') {
    msg.channel.send('https://drive.google.com/uc?id=1Yfv8OTscawJJwOkBkqDVlU5CknztvSsb\n lien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHrq7jDOE7n2N3-SUIFrUa ');
  }

  if (msg.content === prefix + 'b12NOVA14') {
    msg.channel.send('https://drive.google.com/uc?id=1CU_Tc9ifL77uXr8_3_lcWy4Wk40wv0BJ\n lien de la base:https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAGQAAAAGHrbC1jtdvlr4qP1aim3UM');
  }

  if (msg.content === prefix + '10aqhvw') {
    msg.channel.send('TUTO - AQH ValkWitch : https://www.youtube.com/watch?v=iFk-Mcs4qY8 (vidéo avant la mise à jour) https://drive.google.com/uc?id=1cEmim07xsM3V1XZWVr1nLvizRYgUcRsW');
  }

  if (msg.content === prefix + 'b11gdc1') {
    msg.channel.send('https://drive.google.com/uc?id=1FMItIPCU3YWaVNSuW0fgo8BYCrg443dz\n lien de la base: https://link.clashofclans.com/de?action=OpenLayout&id=TH11%3AWB%3AAAAAOwAAAAE0szn7hB1yOCDqfGPY3S1x');
  }

  if (msg.content === prefix + 'b8-1') {
    msg.channel.send('https://drive.google.com/uc?id=11b5laCZ4X7PyHMWVrgcx-VmxoALPQPUM\nlien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAALAAAAAF48RfyEjoW-fSghV6lPG6G\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b8-2') {
    msg.channel.send('https://drive.google.com/uc?id=1K25wRKeisPFg-mzDa6CAAOMzt-kHz0xj\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAALAAAAAF48cAUaGUMBvtB6jELUPRG\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b8-3') {
    msg.channel.send('https://drive.google.com/uc?id=10mKAQ4uqoPbQ-P-kSkzOJAEHmGu8ACD3\nlien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAALAAAAAF48k-yfvjGPunBE09ixBWP\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b8-4') {
    msg.channel.send('https://drive.google.com/uc?id=1GHoyT3q2LBiYcI_pp7flRN2-Aepu-9vM\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AHV%3AAAAALAAAAAF48viHVuybs06Mbdznq2kU\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b8-5') {
    msg.channel.send('https://drive.google.com/uc?id=17tJnO3JNXqjTtP2FgEM7UU_mkZB1UJuw\nlien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAALAAAAAF48GAmPhjrKfgclx9S2l32\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b9-1') {
    msg.channel.send('https://drive.google.com/uc?id=1PAx8BcdPRNj9uIiMqgQiKOmCfZMlRqxI\nlien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AWB%3AAAAAEgAAAAGiRluC7KGWO56MdPwVH2km\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b9-2') {
    msg.channel.send('https://drive.google.com/uc?id=1XN7IdyevDyscwkibjap9kVJ6ENmkpRbL\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH9%3AWB%3AAAAAVAAAAAD6MPHcLAaq_CgRnvDJjt_h\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b9-3') {
    msg.channel.send('https://drive.google.com/uc?id=1RRTX2-jSvfAEMj-kNMiJdnunHEC4KsEd\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH9%3AWB%3AAAAACgAAAAG9IohKzTb9oVHyoD0n0OBL\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b9-4') {
    msg.channel.send('https://drive.google.com/uc?id=19ZjaWYkfLw-q3pvYSKbENVELiPMDZYfg\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH9%3AWB%3AAAAAAQAAAAHlquFSrQIe06sBR2wNUS8s\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b9-5') {
    msg.channel.send('https://drive.google.com/uc?id=1TNxlFGzdDbV8wqkS-MM-w_njBU1RwoK_\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH9%3AHV%3AAAAAGAAAAAFyvDN3TpF9GgpEAmRN_-T5\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b10-1') {
    msg.channel.send('https://drive.google.com/uc?id=1H_nPSee1zC2VtxXD7Bgtx5z_d9WO6flJ\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AWB%3AAAAAGQAAAAGTG2VPSWMqbdsovNy2eU\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b10-2') {
    msg.channel.send('https://drive.google.com/uc?id=1ZJ_lSjLIlG0BjXfuzru2b3_pKaTV45U7\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AWB%3AAAAAIAAAAAGEyamajDFbfJOYEAxtAQZI\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b10-3') {
    msg.channel.send('https://drive.google.com/uc?id=1bt2vtyA3F80FCLweMOrMaLVbzvzFGotk\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AWB%3AAAAAKwAAAAF4-_65yOk0opRX2Tafr9zw\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b10-4') {
    msg.channel.send('https://drive.google.com/oc?id=1j4Z47VHmmKg0NPh4zum44fKhslJ7b-bM\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AWB%3AAAAAJwAAAAGKCCwFP4vhaxX9UD1QSd5G\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b10-5') {
    msg.channel.send('https://drive.google.com/uc?id=1TJEuEGU7yFdqmtVwovdQqLzyc9_mR_wD\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AWB%3AAAAAAwAAAAHhcuvWNYBXQ8cBXgjEwMgd\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b11-1') {
    msg.channel.send('https://drive.google.com/uc?id=12oZuTwSyi-Lky2_Vw-w02xzXFL4uYHkr\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAMgAAAAFqJpOThP0EACZZh0SYOR30\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b11-2') {
    msg.channel.send('https://drive.google.com/uc?id=1QVsKJ3sActDE4QWbBOHow0DemKvZIowE\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AWB%3AAAAAVQAAAAD5-FRnNpKEEFBJ7JWfVcVS\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b11-3') {
    msg.channel.send('https://drive.google.com/uc?id=1uQFsiubmoLvrQfrnmc8NCU36IoNRzQhz\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AWB%3AAAAAEAAAAAGjhB4vcTnJyLpI4-JFUC8H\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b11-4') {
    msg.channel.send('https://drive.google.com/uc?id=1xhlJ9HopO6CZh6ViS-ZuJ1pABJZFQyCl\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AWB%3AAAAAMQAAAAFqZNU_LA4UaUzWbLMD7xtI\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b11-5') {
    msg.channel.send('https://drive.google.com/uc?id=1JD2AcArCg5B8blDZ1MsGm5K5Up08lv_I\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AWB%3AAAAAMQAAAAFqPugP0f_1ZsT8aL6MviH3\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b12-1') {
    msg.channel.send('https://drive.google.com/uc?id=1ewXyhCEGLZLzzxdueuFFQC-ouGbVI_yA\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AWB%3AAAAAAgAAAAHpQHr0Mes_vDBBbaJSST6P\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b12-2') {
    msg.channel.send('https://drive.google.com/uc?id=1tfiJ-DnuRTgbqd8s4yJAhnkd8Q87T-dp\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AWB%3AAAAALgAAAAF5CdqTGGrjv12WkyBiDB28\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b12-3') {
    msg.channel.send('https://drive.google.com/uc?id=1GRU6ZZCHydC52PPWaHxHeJy0Lju6z-iK\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AWB%3AAAAARAAAAAE1vZ210BsF2M1V0ZC1In3p\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b12-4') {
    msg.channel.send('https://drive.google.com/uc?id=18dGr1OMkCZixCN1OkD-cOi-2eobqBh5w\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AWB%3AAAAALwAAAAFq-7FqPLE12jVBOqwqYaRt\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b12-5') {
    msg.channel.send('https://drive.google.com/uc?id=1MjWMQRXqTNZBpVX0oT2HtS3yLYm6FxEj\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AWB%3AAAAAFwAAAAGW9xmzffVJhVC8y9T3_Hli\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b13-1') {
    msg.channel.send('https://drive.google.com/uc?id=1hot9GLlQMx3hckgWWvwHyTzWEtoG1ihI\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH13%3AWB%3AAAAAFAAAAAGaOZS6UURxugha6ifcHq4Q\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b13-2') {
    msg.channel.send('https://drive.google.com/uc?id=1pve9bX6nkN9ciFkyBzSrq7e_VWRJeBZu\n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH13%3AWB%3AAAAADgAAAAGpws0C2tzQDX_LgCEehS0T\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b13-3') {
    msg.channel.send('https://drive.google.com/uc?id=140yRzw7fkW5hEiTUlsUFHRkGTpMkUS44\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AWB%3AAAAAEAAAAAGjktNybrvf7-KfdBXMErTP\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b13-4') {
    msg.channel.send('https://drive.google.com/uc?id=1BlPINjpE807_-rWfaV4x-nYSh-Y3Y21N\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AWB%3AAAAAEAAAAAGjkyrh4oEzX5UCemgRzytD\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }

  if (msg.content === prefix + 'b13-5') {
    msg.channel.send('https://drive.google.com/uc?id=1WZSY9lpQ2k7dNBGiB2k3kIXLGWFoA3wc\n lien de la base: https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AWB%3AAAAAEAAAAAGjkv1Uw--K93YNYrrBYpeX\n\n** si la base nest plus disponible: https://www.youtube.com/watch?v=GYbuLR-I5-Y**');
  }
  if (msg.content === prefix + '12aqhmb') {
    msg.channel.send('TUTO - AQH MoBal : https://www.youtube.com/watch?v=eo6qq5cU4Jg&feature=youtu.be https://drive.google.com/uc?id=1GexnTmwleNQeA7hi2P44DWCQfAXbpPfy');
  }

});

client.on('message', msg => {
  if(msg.content === prefix +"b7farm") {
    msg.channel.send('https://drive.google.com/uc?id=10qiJtkoTAnkJ7U3EgwcA3F1EvFz0Bzc1 \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH7%3AHV%3AAAAASQAAAAEbVR_iklPNPS2gahn5a_Ym')
  }

  if(msg.content.startsWith(prefix +"b7farm1")) {
    msg.channel.send('https://drive.google.com/uc?id=10uxr9pghEhiwUJ7G0h0zFCSMbg5p8xMa \n Lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH7%3AHV%3AAAAASQAAAAEbVSTiF2o9bAOuSTsaVWi1')
  }

  if(msg.content.startsWith(prefix +"b7farm2")) {
    msg.channel.send('https://drive.google.com/uc?id=10ybvX5tXhVBJbbVyL_5QaTradZIpbNC2 \n Lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH7%3AHV%3AAAAASQAAAAEbVSqMXdU5CmXsImEr043p')
  }

  if(msg.content.startsWith(prefix +"b7farm3")) {
    msg.channel.send('https://drive.google.com/uc?id=112khXw02pj8CZHyJcYziSmi6xunDhjJM \n Lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH7%3AHV%3AAAAASQAAAAEbVSqMXdU5CmXsImEr043p')
  }

  if(msg.content.startsWith(prefix +"b7farm4")) {
    msg.channel.send('https://drive.google.com/uc?id=11CWRYEbGX8A_Bh8H2DjJoHxtNLmgRTFb \n Lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH7%3AHV%3AAAAASQAAAAEbVUV_q63_CVI4oOQ9eIRa')
  }

  if(msg.content === prefix +"b8farm") {
    msg.channel.send('https://drive.google.com/uc?id=1-EqL-QZwlzHdSWCIIJzWWKN8Td6I-4sO \n Lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAALAAAAAF7YogDT4kNuZ-JEzWzLHVy')
  }

  if(msg.content.startsWith(prefix +"b8farm1")) {
    msg.channel.send('https://drive.google.com/uc?id=1-ARYgwyorWvNjZE0ZctnPwvBWbDPU2Jz \n Lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAALAAAAAF7YpgqkG1qyt0XMUWQGs6I')
  }

  if(msg.content.startsWith(prefix +"b8farm2")) {
    msg.channel.send('https://drive.google.com/uc?id=1-Bk1DlQmE8S21UuZBjd4MNH08RKW3m9f \n Lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAALAAAAAF7Yo3F9_6UBvKWJ2-LlkUs')
  }

  if(msg.content.startsWith(prefix +"b8farm3")) {
    msg.channel.send('https://drive.google.com/uc?id=1-CrD4Nbnv2L2nlH4MjSYhIc9e0KcM9w8 \n Lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AWB%3AAAAALAAAAAF7YoH6HOGMut-0JmJzDcqT')
  }

  if(msg.content.startsWith(prefix +"b8farm4")) {
    msg.channel.send('https://drive.google.com/uc?id=1-DqH3Yo8xK_uTHpnAv5c-tIIbFezQkvW \n Lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH8%3AHV%3AAAAALAAAAAF7YsBXiO-pd7C0hMomRnsz')
  }

  if(msg.content.startsWith(prefix +"b9farm5")) {
    msg.channel.send('https://drive.google.com/uc?id=1-FomOJzfas-fxXRIPbuRhRAmu6ijSFIg \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH9%3AHV%3AAAAAGAAAAAGT3lKIy1fEs5kGyZ2tZnai')
  }

  if(msg.content.startsWith(prefix +"b9farm6")) {
    msg.channel.send('https://drive.google.com/uc?id=1-QuNQYGPSqzmtGts2V8s7r0b-QcdOtvb \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH9%3AHV%3AAAAADwAAAAGtx_NglLGAu__GiYNqaHLt')
  }

  if(msg.content.startsWith(prefix +"b9farm7")) {
    msg.channel.send('https://drive.google.com/uc?id=1-Qw3iAZF4VeBkokbl1CAcHTAvwSQqbgN \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH9%3AHV%3AAAAAGAAAAAGT3gfl-Tz8b78JCZwWmwUO')
  }

  if(msg.content.startsWith(prefix +"b9farm8")) {
    msg.channel.send('https://drive.google.com/uc?id=1-Tzi7LtgKDcVcwW6EtO5ATm-8V3xQIU9 \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH9%3AHV%3AAAAAGAAAAAGT3haz1EmZgNI_ygZz8W4E')
  }

  if(msg.content.startsWith(prefix +"b9farm9")) {
    msg.channel.send('https://drive.google.com/uc?id=1-XqzChFS1d-nxjhLHFzmmL2eoy_0wY72 \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH9%3AHV%3AAAAAGAAAAAGT83NaDI23dJ6wmfbL3dcT')
  }

  if(msg.content.startsWith(prefix +"b10farm4")) {
    msg.channel.send('https://drive.google.com/uc?id=108IPUFJhSpbXqQXQWB5NXxJlwef8yKWx \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AHV%3AAAAAJwAAAAGMXHLua0yBkb2cbgzNAmKw')
  }

  if(msg.content.startsWith(prefix +"b10farm5")) {
    msg.channel.send('https://drive.google.com/uc?id=1-iMYHHvLhg1bcw2dEPD7OSn-FCTf_Oz0 \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AHV%3AAAAAJwAAAAGMXFocfpFtRoMa8fcF7OHZ')
  }

  if(msg.content.startsWith(prefix +"b10farm6")) {
    msg.channel.send('https://drive.google.com/uc?id=1-sCB_d2KVj7Xvu5rA0kO7sF50GVEJ6M9 \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AHV%3AAAAAJwAAAAGMXFMaqP9BNNZREhbIJwEX')
  }

  if(msg.content.startsWith(prefix +"b10farm7")) {
    msg.channel.send('https://drive.google.com/uc?id=1069pbj0UoI_YF320adEGvxXzFaVYhn3j \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AHV%3AAAAAJwAAAAGMW_3WRc_BF6C37FOBDsZN')
  }

  if(msg.content.startsWith(prefix +"b10farm8")) {
    msg.channel.send('https://drive.google.com/uc?id=1-f5KHYWLfC48ZF2ElZ5EU54HvwVLXrZU \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH10%3AHV%3AAAAAJwAAAAGMW-0ObxeUKQInvTYDuEMt')
  }

  if(msg.content.startsWith(prefix +"b11farm4")) {
    msg.channel.send('https://drive.google.com/uc?id=109udlGqaeVspWcpEiDm0CWT4LNVEVQ8j \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAPAAAAAFJEZeTY6vS1Er6D59yujVS')
  }

  if(msg.content.startsWith(prefix +"b11farm5")) {
    msg.channel.send('https://drive.google.com/uc?id=10Cl7Uqz7BOSYIziwI-xbbASgG4eA1g4Z \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAFwAAAAGYzMzMBzqaAaIwNEuppGve')
  }

  if(msg.content.startsWith(prefix +"b11farm6")) {
    msg.channel.send('https://drive.google.com/uc?id=10O6IjKSVCToxxphIDmPQlgZP25zPv_YR \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAEAAAAAGlqRytcDyOfDJ_7-J-Pzen')
  }

  if(msg.content.startsWith(prefix +"b11farm7")) {
    msg.channel.send('https://drive.google.com/uc?id=10_3OvTs_DRw5k5fJDV-g7PrPHX5jY43K \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAPAAAAAFJEaR9Yy9TnOeh-9fC21j0')
  }

  if(msg.content.startsWith(prefix +"b11farm8")) {
    msg.channel.send('https://drive.google.com/uc?id=10fPEabskkW-d5yKFixu-2pGfIXrZty81 \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAPAAAAAFJEZ8wiuryhc9ifjM6zgy_')
  }

  if(msg.content.startsWith(prefix +"b12farm6")) {
    msg.channel.send('https://drive.google.com/uc?id=11hCn0Xy5KFVQ34cE1qSZFLH2DPf6pBUP \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAAAgAAAAHsBEroEyCT81EJOs7uODsM')
  }

  if(msg.content.startsWith(prefix +"b12farm7")) {
    msg.channel.send('https://drive.google.com/uc?id=11iVzO7IMQWBUS39xBskVtU5RQt4lOYz5 \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAAAgAAAAHsGpTF5iAeoCAbi0jC58Jf')
  }

  if(msg.content.startsWith(prefix +"b12farm8")) {
    msg.channel.send('https://drive.google.com/uc?id=11dFIugZLuUrDVz-00CRvef8PgIzpYvl5 \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAAAgAAAAHsGqSNFY-cENmzIKLTXnno')
  }

  if(msg.content.startsWith(prefix +"b12farm9")) {
    msg.channel.send('https://drive.google.com/uc?id=11W_T9apx01KoX9B3FbO-QlCAB2sdjgLk \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAAAgAAAAHsGsWaIQ-WAPSFzMQDjikg')
  }

  if(msg.content.startsWith(prefix +"b12farm10")) {
    msg.channel.send('https://drive.google.com/uc?id=11SHnyw8WrksO4_XJE36GeHf7Cux7fQkx \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH12%3AHV%3AAAAAAgAAAAHsGuuycbIYkOKXrMMya1PM')
  }

  if(msg.content.startsWith(prefix +"b13farm4")) {
    msg.channel.send('https://drive.google.com/uc?id=11zsKj0szIlP_qMCU1naINH004sUt_nPt \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH13%3AWB%3AAAAAHwAAAAGPdmj18J46IGxXGaJZIwhp')
  }

  if(msg.content.startsWith(prefix +"b13farm5")) {
    msg.channel.send('https://drive.google.com/uc?id=128w4fXJpJfBdVLDaG3j8sIoF-1Kw7QuZ \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH13%3AHV%3AAAAAHwAAAAGPdrdgnQerYNulZK5KaKSC')
  }

  if(msg.content.startsWith(prefix +"b13farm6")) {
    msg.channel.send('https://drive.google.com/uc?id=12Ej221EZDq3zknx6winfEZoZKuNis_od \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH13%3AHV%3AAAAAHwAAAAGPdvTLegqnd2dwL2SPH27G')
  }

  if(msg.content.startsWith(prefix +"b13farm7")) {
    msg.channel.send('https://drive.google.com/uc?id=12OO14wv9fJT_pPAmrd8PegRaDAgvnRsx \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH13%3AHV%3AAAAAHwAAAAGPdyiF1ehXoZ4iWmLcMP0S')
  }

  if(msg.content.startsWith(prefix +"b13farm8")) {
    msg.channel.send('https://drive.google.com/uc?id=12Rpj0tKYGEzQVSh0daGfHEEXRnvqIEie \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH13%3AHV%3AAAAAHwAAAAGPd0f_gsD9WX40PAPbpQpj')
  }

  if(msg.content.startsWith(prefix +"b11r1")) {
    msg.channel.send('https://drive.google.com/uc?id=1_FKfjJhYxaW8aWs2pyKvrNxMK8IyGh3s \n lien de la base:  https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AWB%3AAAAAHwAAAAGHXC8aF6DJBHuCHD8mQ32X')
  }
  if(msg.content.startsWith(prefix +"b11r2")) {
    msg.channel.send('https://drive.google.com/uc?id=1sbPYE5MWHtbkrUhkwwuaHlDvXIXpUkRt \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAHAAAAAGYInb-16lW-ilZqEHUWRoQ')
  }
  if(msg.content.startsWith(prefix +"b11r3")) {
    msg.channel.send('https://drive.google.com/uc?id=12bSjGVMJVnvoV-rGFWLoL6l2XuxB24RS \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAHAAAAAGYIoZCPKrPx2Kr6otEse4m')
  }
  if(msg.content.startsWith(prefix +"b11r4")) {
    msg.channel.send('https://drive.google.com/uc?id=1fGxkuA-RsnlRvitFJKz7vi2HMP15X4Ds \n lien de la base: https://link.clashofclans.com/fr?action=OpenLayout&id=TH11%3AHV%3AAAAAHAAAAAGYM0WVklVnpKF1tUlNN8Xk')
  }
});

client.login('NjU3MjkzOTI2NzMwMDM5MzA2.XkxGOA.M0ZpyTFlzasAxvPqeai2ZOJX9x8');
