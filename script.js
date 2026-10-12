function upDate(previewPic) {
    // 1. Kiểm tra sự kiện và in thông tin ra console
    console.log("Sự kiện mouseover đã được kích hoạt.");
    console.log("Đường dẫn ảnh (src): " + previewPic.src);
    console.log("Văn bản mô tả (alt): " + previewPic.alt);

    // 2. Thay đổi ảnh nền của khung hiển thị chính (id='image') thành ảnh đang được trỏ tới
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    // 3. Thay đổi nội dung chữ thành thẻ alt của ảnh
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
    // 1. Đặt lại ảnh nền về trạng thái trống ban đầu
    document.getElementById('image').style.backgroundImage = "url('')";

    // 2. Đặt lại đoạn văn bản mặc định ban đầu
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
