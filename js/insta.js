// dummy images from uns
const instaStoryImg = [
    {
        id: "1001",
        dp: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixi<d=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        story: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixi<d=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
        id: "1002",
        dp: "https://images.unsplash.com/photo-1693569444434-85aa71939cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story: "https://images.unsplash.com/photo-1693569444434-85aa71939cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        id: "1003",
        dp: "https://images.unsplash.com/photo-1648377024500-328100a823f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story: "https://images.unsplash.com/photo-1648376306856-906ebf86b087?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: "1004",
        dp: "https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story: "https://images.unsplash.com/photo-1693336431208-91098a90e155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: "1005",
        dp: "https://images.unsplash.com/photo-1674905758315-5b720f08c517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1674905758261-f261ef1186ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
    }
];
// adding dynamic images in .insta-stories div
let template = "";
const instaStoryWrapper = document.querySelector(".insta-stories");
instaStoryImg.forEach((item, idx) => {
    template += `
    <div class="insta-story" id="${idx}">
    <div class="story-img">
        <img src="${item.dp}" id="${idx}"
            alt="insta image" class="img-fluid rounded-circle" />
    </div>
</div>
    `;
});
instaStoryWrapper.innerHTML = template;
// chanage stories on click handler
let img = "";
function viewInstaStoryImg(idx) {
    let fullScreenImg = document.querySelector('.story-fullscreen');
    let [{ story, id }] = instaStoryImg.filter((item, elemIdx) => {
        return instaStoryImg[idx] === instaStoryImg[elemIdx];
    });
    img += `
        <div class="insta-progress-bar"></div>
        <img src="${story}" alt="insta image" id="${idx}" />`;
    fullScreenImg.style.display = "block";
    fullScreenImg.style.transition = "all .3s easy";
    fullScreenImg.innerHTML = img;

    setTimeout(() => {
        img = "";
        fullScreenImg.style.display = "none";
    }, 5500);
}
// get current clicked story items
instaStoryWrapper.addEventListener("click", function (event) {
    event.preventDefault();
    viewInstaStoryImg(event.target.id);

});









