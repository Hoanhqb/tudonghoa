const panels =  document.querySelectorAll('.panel')
/* Chọn tất cả các phần tử trong index.HTML có lớp Panel và 
 lưu chúng vào biến panels.*/
panels.forEach((panel)=>{ 
    /* quét tất cả các phần tử của lớp panel
     lắng nghe sự kiện click.*/
    panel.addEventListener('click',()=>{ 
    removeACtiveClasses() 
    // gọi phương thức removeactive class
    panel.classList.add('active')
    /* thêm lớp active vào phần tử panel
    mà người dùng đã nhấp*/
    })

})
function removeACtiveClasses(){
    panels.forEach((panel )=>{
        panel.classList.remove('active');
    })
}