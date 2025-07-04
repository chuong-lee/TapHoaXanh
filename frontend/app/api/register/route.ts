import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, password, confirmPassword, inviteCode } = body

    // Kiểm tra dữ liệu bắt buộc
    if (!fullName || !email || !password || !confirmPassword) {
      return NextResponse.json({ message: 'Vui lòng điền đầy đủ thông tin' }, { status: 400 })
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ message: 'Mật khẩu xác nhận không khớp' }, { status: 400 })
    }

    // ⚠ Giả lập lưu user thành công
    console.log('Đăng ký thành công:', { fullName, email, inviteCode })

    return NextResponse.json({ message: 'Đăng ký thành công' }, { status: 200 })
  } catch (error) {
    console.error('Lỗi API register:', error)
    return NextResponse.json({ message: 'Đã xảy ra lỗi server' }, { status: 500 })
  }
}
