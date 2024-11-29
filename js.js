function baslat() {
    let secim1 = prompt("Macera başlıyor! Nereye gitmek istersin? a = Ormana, b = Deniz kenarına").toLowerCase();
  
    if (secim1 === "a") {
        ormanYolu();
    } else if (secim1 === "b") {
        denizKenariYolu();
    } else {
        console.log("Geçersiz seçenek. Lütfen 'a' veya 'b' giriniz.");
        baslat(); 
    }
  }
  
  
  function ormanYolu() {
    let secim2 = prompt("Ormana geldin. Bir ayı görüyorsun! Ne yapacaksın? a = Kaçmak, b = Sessizce saklanmak").toLowerCase();
  
    if (secim2 === "a") {
        kacmak();
    } else if (secim2 === "b") {
        saklanmak();
    } else {
        console.log("Geçersiz seçenek. Lütfen 'a' veya 'b' giriniz.");
        ormanYolu();
    }
  }
  
  function denizKenariYolu() {
    let secim2 = prompt("Deniz kenarındasın. Göz alabildiğine bir tekne var. Ne yapacaksın? a = Tekneye binmek, b = Kumsalda yürüyüş yapmak").toLowerCase();
  
    if (secim2 === "a") {
        tekneYolculugu();
    } else if (secim2 === "b") {
        kumsaldaYuruyus();
    } else {
        console.log("Geçersiz seçenek. Lütfen 'a' veya 'b' giriniz.");
        denizKenariYolu();
    }
  }
  
  
  function kacmak() {
    let secim3 = prompt("Kaçıyorsun! Ayı seni kovalıyor. a = Daha hızlı koşmak, b = Ağaca tırmanmak").toLowerCase();
  
    if (secim3 === "a") {
        console.log("Ayıdan kaçamadın. Maalesef maceran burada sona erdi.");
    } else if (secim3 === "b") {
        console.log("Ağaca tırmandın ve ayı seni bulamadı! Güvendesin.");
        let secim4 = prompt("Şimdi ne yapacaksın? a = Ağacı terk etmek, b = Bir süre daha beklemek").toLowerCase();
        
        if (secim4 === "a") {
            console.log("Ağaçtan inip güvenli bir yere gittin. Maceran mutlu sonla bitti!");
        } else if (secim4 === "b") {
            console.log("Çok bekledin ve ayı geri döndü! Maalesef yakalandın.");
        } else {
            console.log("Geçersiz seçenek.");
        }
    } else {
        console.log("Geçersiz seçenek. Lütfen 'a' veya 'b' giriniz.");
        kacmak();
    }
  }
  
  function saklanmak() {
    let secim3 = prompt("Sessizce saklandın. Ayı seni fark etmedi! Şimdi ne yapacaksın? a = Saklandığın yerden çıkmak, b = Bir süre daha saklanmak").toLowerCase();
  
    if (secim3 === "a") {
        console.log("Saklandığın yerden çıktın ve güvenliğe ulaştın! Maceran başarıyla sona erdi.");
    } else if (secim3 === "b") {
        console.log("Çok uzun süre saklandın ve sonunda yardım buldun. Mutlu son!");
    } else {
        console.log("Geçersiz seçenek. Lütfen 'a' veya 'b' giriniz.");
        saklanmak();
    }
  }
  
  function tekneYolculugu() {
    let secim3 = prompt("Tekneye bindin! Denizin ortasındasın. a = Balık tutmak, b = Tekneyle daha uzağa gitmek").toLowerCase();
  
    if (secim3 === "a") {
        console.log("Harika balıklar yakaladın! Güzel bir gün geçirdin.");
    } else if (secim3 === "b") {
        console.log("Denizin ortasında bir fırtına çıktı! Teknen devrildi. Maceran sona erdi.");
    } else {
        console.log("Geçersiz seçenek. Lütfen 'a' veya 'b' giriniz.");
        tekneYolculugu();
    }
  }
  
  function kumsaldaYuruyus() {
    let secim3 = prompt("Kumsalda yürüyüş yapıyorsun. Bir deniz kabuğu buldun! a = Kabuğu alıp saklamak, b = Kabuğu denize geri atmak").toLowerCase();
  
    if (secim3 === "a") {
        console.log("Kabuğu sakladın ve güzel bir hatıra edindin.");
    } else if (secim3 === "b") {
        console.log("Kabuğu geri attın ve dalgaların huzuruyla güzel bir gün geçirdin.");
    } else {
        console.log("Geçersiz seçenek. Lütfen 'a' veya 'b' giriniz.");
        kumsaldaYuruyus();
    }
  }
  
  
  baslat();