function changeLanguage() {
    var select = document.getElementById("language-select");
    var selectedLanguage = select.value;
    
    if (selectedLanguage === "English") {
        document.getElementById("cont1").textContent = "Unlimited movies, TV shows and more";
        document.getElementById("cont2").textContent = "Watch anywhere. Cancel anytime.";
        document.getElementById("cont3").textContent = "Ready to watch? Enter your email to create or restart your membership.";
        document.getElementById("text1").textContent = "Enjoy on your TV";
        document.getElementById("text2").innerHTML = "Watch on smart TVs, PlayStation, Xbox,<br>Chromecast, Apple TV, Blu-ray players and more.";
        document.getElementById("text3").innerHTML = "Download your<br>shows to watch<br>offline";
        document.getElementById("text4").innerHTML = "Save your favourites easily and always have<br> something to watch.";
        document.getElementById("text5").textContent = "Watch everywhere";
        document.getElementById("text6").innerHTML = "Stream unlimited movies and TV shows on your<br>phone, tablet, laptop, and TV.";
        document.getElementById("text7").innerHTML = "Create profiles for<br>kids";
        document.getElementById("text8").innerHTML = "Send children on adventures with their favourite<br>characters in a space made just for them—free with<br>your membership.";
    } else if (selectedLanguage === "Hindi") {
        document.getElementById("cont1").textContent = "अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ";
        document.getElementById("cont2").textContent = "जहां चाहें देखें. जब चाहें कैंसल करें.";
        document.getElementById("cont3").textContent = "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.";
        document.getElementById("text1").textContent = "अपने टीवी पर आनंद लें";
        document.getElementById("text2").innerHTML = "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV,<br>Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.";
        document.getElementById("text3").innerHTML = "ऑफ़लाइन देखने के लिए<br>अपने शो डाउनलोड करें";
        document.getElementById("text4").innerHTML = "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी<br>इन्हें देख सकें.";
        document.getElementById("text5").textContent = "हर जगह देखें";
        document.getElementById("text6").innerHTML = "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी<br>पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.";
        document.getElementById("text7").innerHTML = "बच्चों के लिए प्रोफ़ाइल बनाएं";
        document.getElementById("text8").innerHTML = "बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस<br>रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी<br>मेंबरशिप के साथ फ़्री.";
    }
} 
function toggleAnswer(element) {
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allQuestions = document.querySelectorAll('.faq-item');
    const isVisible = element.querySelector('.faq-answer').style.display === 'block';

    // Close all answers
    allAnswers.forEach(answer => answer.style.display = 'none');
    allQuestions.forEach(item => item.classList.remove('active'));

    // If the clicked answer was not already visible, open it
    if (!isVisible) {
        element.querySelector('.faq-answer').style.display = 'block';
        element.classList.add('active');
    }
}