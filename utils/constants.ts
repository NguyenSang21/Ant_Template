export const httpCodeMessage = {
  200: 'Máy chủ đã trả lại thành công dữ liệu được yêu cầu.',
  201: 'Dữ liệu mới hoặc đã sửa đổi thành công.',
  202: 'Một yêu cầu đã vào hàng đợi nền (tác vụ không đồng bộ).',
  204: 'Dữ liệu đã được xóa thành công.',
  400: 'Đã xảy ra lỗi trong yêu cầu được gửi và máy chủ không tạo hoặc sửa đổi dữ liệu.',
  401: 'Người dùng không có quyền (mã thông báo, tên người dùng, mật khẩu sai).',
  403: 'Người dùng được phép, nhưng quyền truy cập bị cấm.',
  404: 'Yêu cầu được gửi dành cho một bản ghi không tồn tại và máy chủ không hoạt động.',
  405: 'Phương thức yêu cầu không được phép.',
  406: 'Định dạng được yêu cầu không có sẵn.',
  410: 'Tài nguyên được yêu cầu sẽ bị xóa vĩnh viễn và sẽ không còn nữa.',
  422: 'Khi tạo một đối tượng, đã xảy ra lỗi xác thực.',
  500: 'Đã xảy ra lỗi trong máy chủ, vui lòng kiểm tra máy chủ.',
  502: 'Lỗi cổng.',
  503: 'Dịch vụ không khả dụng và máy chủ tạm thời bị quá tải hoặc được bảo trì.',
  504: 'Cổng vào đã hết thời gian chờ.',
};

export const EXCEPTION_STATUS = [401, 404];
