//let name = "Ney Hiwerson";
    //name = "o garotao";
    //alert(name)
    const links = {
      github:"NeyHiwerson",
      youtube : "/channel/UCWFhWfv5MqJKRvNCwYbYDtw",
      facebook : "ney.hiwersonmissiasribeiro",
      instagran : "hiwersonmissiasribeiro",
      twitter : "hiwerson"
    }
    /*const github = "NeyHiwerson"
    const youtube = "UCWFhWfv5MqJKRvNCwYbYDtw"
    const facebook = "ney.hiwersonmissiasribeiro"
    const instagran = "hiwersonmissiasribeiro"
    const twitter = "hiwerson"*/

    /*function showMeSometing(){
      alert(links.instagran)
    }

    function changeSocialMediaLinks(){
      document.getElementById('userName').textContent = 'Olivia'
    }

    changeSocialMediaLinks()

    showMeSometing()*/
    //alert(li.getAttribute('class'))

    function changeSocialMediaLinks() {
      //userName.textContent = "João e o Pé de feijão"
      /*for (let i = 0; i <= 10; i++){
        alert (i)
      }*/
      for (let li of socialLinks.children) {  
        //alert(li.getAttribute('class'))      
        /*const social = li.getAttribute('class')
        alert(social)*/
        //alert(li.children[0].href)
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${links[social]}`
        //alert(li.children[0].href)
      }
    }
    changeSocialMediaLinks()

    function getGitHubProfileInfos(){
      const url = `https://api.github.com/users/${links.github}`
      //alert(url)

      fetch(url)
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        //userLink.textContent = data.login
        userLogin.textContent = data.login


      })
    }

    getGitHubProfileInfos()