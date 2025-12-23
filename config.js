/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: " Tuấn Vũ  ",
  brideName: "Thu Hoài ",

  weddingDate: "02/07/2026  10:30:00",
  location: "20 P. Láng Hạ, Láng Hạ, Đống Đa, Hà Nội  ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/iUAHAdMiFrzFSZo76",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5222.904402459904!2d105.81440289999999!3d21.016232799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab63791d9ee5%3A0x9e6cca93a08ef5c!2sQueen%20Bee%20Luxury!5e1!3m2!1svi!2s!4v1766470407463!5m2!1svi!2s",
  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/oEGLLWBUeuE",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Tuấn Vũ ",
      parents: "Bố: Phạm Văn Mẫn  <br>Mẹ: Nguyễn Thị Dung ",
      address: "Địa chỉ: Số 10 ngách 74 Ngõ 271 Bùi Xương Trạch, Khương Đình, Thanh Xuân, Hà Nội	"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Thu Hoài ",
      parents: "Bố: Nguyễn Đức Hải <br>Mẹ: Trần Thị Hồi",
      address: "Địa chỉ: Số 7 Ngõ 172 Lò Đúc, phường Hai Bà Trưng, Hà Nội "
    }
  },
};
