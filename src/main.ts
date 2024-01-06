console.log("imported1");

const checker = document.getElementById("compatibility-check");
if (checker) {
  checker.innerText = navigator.gpu
    ? "WebGPU supported"
    : "WebGPU NOT supported";
}
