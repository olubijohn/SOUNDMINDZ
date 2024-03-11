alert(" Please fill in the HELP US KNOW YOU FORM ");

// like
let a = 4999;
export function lcounter() {
  a = a + 1; //a++;
  document.getElementById("show").innerHTML = a;

  localStorage.setItem("likeCount", a);
}

// local cache session code
// let b=sessionStorage.getItem('visited');
