function submitForm(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form
  
    // Lấy giá trị từ các trường đăng ký
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
  
    // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp nhau không
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
  
    // Gửi dữ liệu đăng ký đến máy chủ hoặc xử lý theo yêu cầu của bạn
    // ở đây chúng ta chỉ hiển thị thông báo đăng ký thành công
    alert("Đăng ký thành công!");
  }

  function submitForm(event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có giống nhau không
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }
      // Đăng ký thành công, hiển thị thông báo đăng nhập
      alert("Đăng ký thành công! ");

    // Đăng ký thành công, hiển thị form đăng nhập
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";

    window.location.href = "home.html#top";
     
  }



  