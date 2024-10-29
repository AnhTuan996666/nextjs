import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404 - Trang không tìm thấy</h1>
      <p className="text-lg text-gray-700 mb-8">Rất tiếc, trang bạn đang tìm kiếm không tồn tại.</p>
      <Link href="/">
        <span
          className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
        >
          Quay lại trang chủ
        </span>
      </Link>
    </div>
  );
}
