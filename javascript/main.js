let butt = document.querySelector(".butt");
butt.addEventListener("click", () => {
  window.open("https://thegivingmovement.com/");
});
// Select all p elements
const paragraphs = document.querySelectorAll("p");

// Loop through each paragraph and add a click event listener
paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("click", () => {
    // Create a temporary textarea to hold the paragraph text
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = paragraph.innerHTML;
    document.body.appendChild(tempTextarea);

    // Select and copy the text
    tempTextarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Log a message to the console
    console.log("Copied to clipboard:", paragraph.innerHTML);
    Swal.fire({
      title: "تم نسخ الكود بنجاح",
      text: " اضغط موافق واستمتع بالخصم",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "https://ar.thegivingmovement.com/";
      }
    });
  });
});
