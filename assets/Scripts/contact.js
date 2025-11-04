const media = document.querySelector(".contact-media");

const contactList = [
  {
    id: 1,
    icon: "ph ph-phone-call",
    name: "Phone :",
    value: "(+91) 9305842334",
    href: "tel:+918446496766",
  },
  {
    id: 2,
    icon: "ph ph-envelope",
    name: "E-mail :",
    value: "vd26875@gmail.com",
    href: "mailto:Vikas Dubey",
  },
  {
    id: 3,
    icon: "ph ph-map-pin-area",
    name: "Country :",
    value: "India",
    href: "#",
  },
];

const contactContent = contactList
  .map((ele) => {
    return `<div class="media key="${ele?.id}">
                        <span><i class="${ele?.icon}"></i></span>
                        <div class="contact-value">
                            <p>${ele?.name}</p>
                            <a href="${ele?.href}">${ele.value}</a>
                        </div>
                    </div>`;
  })
  .join("");

if (media) {
  media.innerHTML = contactContent;
}

//send contact message

const sendBtn=document.querySelector("#send-msg");

const originalText=sendBtn.innerHTML;
const originalStyle={
    backgroundColor : sendBtn.style.backgroundColor,
    color : sendBtn.style.color,
    border : sendBtn.style.border,
    boxShadow : sendBtn.style.boxShadow,
}

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();

  sendBtn.innerHTML="Sending...";
  sendBtn.style.backgroundColor="gray";
  sendBtn.style.color="white";
  sendBtn.style.border="none";
  sendBtn.style.boxShadow="none";
  sendBtn.disabled=true;


  const name = document.getElementById("name").value;
  const phone = document.getElementById("Phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (!name || !phone || !email || !message) {
    sendBtn.innerHTML=originalText;

    Object.assign(sendBtn.style, originalStyle);
    setTimeout(()=>{
     sendBtn.disabled=false;
    },3000);

     return   Toastify(
    {
  text: "All the fields are Mandatory",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  gravity: "top", // `top` or `bottom`
  position: "center",
  newWindow : true,
  close: true,
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "rgb(206,16,16)",
     
  },
}).showToast();
  }


  emailjs.send("service_121i0nd", "template_nq85lgb", {
      name,
      phone,
      email,
      message,
    })
    .then(
      () => {
        Toastify({
  text: "Message Sent",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center",
  close: true,
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "rgb(9,222,38)",
  },}).showToast();

  setTimeout(()=>{
    sendBtn.innerHTML=originalText;
    Object.assign(sendBtn.style, originalStyle);
    sendBtn.disabled=false;
  }, 3000);
      },
      (error) => {
               Toastify({
  text: "Message error !",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center",
  close: true,
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "rgb(206,16,16)",
  },}).showToast();
        console.log("FAILED...", error);
      }
    );
     setTimeout(()=>{
    sendBtn.innerHTML=originalText;
    Object.assign(sendBtn.style, originalStyle);
    sendBtn.disabled=false;
  }, 3000);

});
