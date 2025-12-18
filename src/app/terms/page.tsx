import { ArrowLeft, FileText, AlertCircle, CheckCircle, Clock, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">SARNO WAHYUDI Transport</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Pendahuluan</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di SARNO WAHYUDI Transport. Syarat dan Ketentuan ini mengatur penggunaan layanan 
                transportasi yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh 
                syarat dan ketentuan yang diuraikan di bawah ini.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Jika Anda tidak setuju dengan syarat dan ketentuan ini, harap jangan menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Layanan Kami</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  SARNO WAHYUDI Transport menyediakan layanan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Angkutan barang untuk berbagai keperluan</li>
                  <li>Sewa kendaraan harian dan mingguan</li>
                  <li>Layanan pengiriman dalam dan luar kota</li>
                  <li>Transportasi untuk kebutuhan bisnis dan personal</li>
                  <li>Layanan antar jemput barang</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Kami berhak menolak layanan kepada siapa pun dengan alasan apa pun, termasuk tetapi tidak terbatas pada 
                  kapasitas kendaraan yang tidak mencukupi atau permintaan yang tidak sesuai dengan regulasi.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Kewajiban Pengguna</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Sebagai pengguna layanan, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap saat pemesanan</li>
                  <li>Memastikan barang yang diangkut legal dan tidak melanggar hukum</li>
                  <li>Memberikan informasi yang benar tentang berat dan volume barang</li>
                  <li>Mematuhi semua peraturan lalu lintas yang berlaku</li>
                  <li>Merawat kendaraan dengan baik selama masa sewa</li>
                  <li>Melaporkan kerusakan atau masalah segera kepada kami</li>
                  <li>Tidak menggunakan kendaraan untuk kegiatan ilegal</li>
                  <li>Menanggung biaya tambahan jika terjadi keterlambatan pengembalian</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Booking and Payment */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Pemesanan dan Pembayaran</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Pemesanan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Pemesanan dapat dilakukan melalui telepon, WhatsApp, atau langsung di kantor kami</li>
                    <li>Pemesanan minimal 2 jam sebelum waktu penggunaan layanan</li>
                    <li>Perubahan jadwal dapat dilakukan maksimal 1 jam sebelum waktu yang disepakati</li>
                    <li>Pembatalan layanan akan dikenakan biaya sesuai kebijakan pembatalan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Pembayaran</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Pembayaran dapat dilakukan tunai atau transfer bank</li>
                    <li>DP minimal 50% diperlukan untuk pemesanan jangka panjang</li>
                    <li>Pelunasan harus dilakukan sebelum atau pada saat penggunaan layanan</li>
                    <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Harga dan Biaya</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Harga layanan kami meliputi:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Biaya sewa kendaraan sesuai durasi yang disepakati</li>
                  <li>Biaya supir (jika diperlukan)</li>
                  <li>Biaya bahan bakar untuk rute yang ditentukan</li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  Biaya tambahan mungkin berlaku untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Biaya tol dan parkir</li>
                  <li>Biaya penginapan supir untuk perjalanan jauh</li>
                  <li>Biaya keterlambatan pengembalian kendaraan</li>
                  <li>Biaya kelebihan muatan atau jarak tempuh</li>
                  <li>Biaya cleaning jika kendaraan dikembalikan dalam kondisi kotor</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation Policy */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Kebijakan Pembatalan</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Pembatalan oleh Pelanggan:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>&gt; 24 jam sebelum layanan: Pengembalian 100% dari DP</li>
                    <li>12-24 jam sebelum layanan: Pengembalian 50% dari DP</li>
                    <li>&lt; 12 jam sebelum layanan: Tidak ada pengembalian DP</li>
                    <li>Pembatalan saat layanan berlangsung: Dikenakan biaya penuh</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Pembatalan oleh SARNO WAHYUDI Transport:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Karena cuaca buruk atau force majeure: Pengembalian 100%</li>
                    <li>Karena kendala teknis: Pengembalian 100% atau penggantian kendaraan</li>
                    <li>Karena alasan lain: Pengembalian 100% dan pemberitahuan secepatnya</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Liability */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Batasan Tanggung Jawab</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  SARNO WAHYUDI Transport tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Kehilangan atau kerusakan barang yang tidak diasuransikan</li>
                  <li>Keterlambatan yang disebabkan oleh faktor di luar kendali kami (macet, cuaca, dll)</li>
                  <li>Kerusakan pribadi selama penggunaan layanan</li>
                  <li>Penggunaan layanan yang melanggar hukum</li>
                  <li>Biaya yang timbul dari penyalahgunaan layanan oleh pelanggan</li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  Tanggung jawab kami maksimal sebesar biaya layanan yang telah dibayar.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Insurance */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Asuransi</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Semua kendaraan kami dilindungi oleh:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Asuransi kendaraan comprehensive (All Risk)</li>
                  <li>Asuransi tanggung jawab pihak ketiga</li>
                  <li>Asuransi kecelakaan penumpang (jika tersedia)</li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  Pelanggan dapat membeli asuransi tambahan untuk barang yang diangkut dengan biaya terpisah.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Disputes */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Penyelesaian Sengketa</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Jika terjadi sengketa terkait layanan kami:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Upayakan penyelesaian secara musyawarah terlebih dahulu</li>
                  <li>Hubungi layanan pelanggan kami untuk mediasi</li>
                  <li>Jika tidak ada kesepakatan, sengketa akan diselesaikan melalui hukum yang berlaku di Indonesia</li>
                  <li>Yurisdiksi untuk semua sengketa adalah Pengadilan Negeri Lampung Selatan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi:
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Nama Perusahaan:</span>
                      <span className="ml-2">SARNO WAHYUDI Transport</span>
                    </div>
                    <div>
                      <span className="font-semibold">Alamat:</span>
                      <span className="ml-2">Dusun Sukarame 1, Desa Haduyang, Kec. Natar, Kab. Lampung Selatan, Provinsi Lampung 39352</span>
                    </div>
                    <div>
                      <span className="font-semibold">Telepon:</span>
                      <span className="ml-2">0823-1204-2895</span>
                    </div>
                    <div>
                      <span className="font-semibold">Email:</span>
                      <span className="ml-2">info@sarnowahyudi-transport.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card className="border-0 shadow-lg bg-blue-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Persetujuan</h2>
              
              <div className="space-y-4">
                <p className="text-blue-100">
                  Dengan menggunakan layanan SARNO WAHYUDI Transport, Anda menyatakan bahwa:
                </p>
                <ul className="list-disc list-inside text-blue-100 space-y-2">
                  <li>Anda telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini</li>
                  <li>Anda berusia minimal 18 tahun atau memiliki izin orang tua/wali</li>
                  <li>Anda memiliki kapasitas hukum untuk membuat perjanjian yang mengikat</li>
                  <li>Anda akan mematuhi semua syarat dan ketentuan yang berlaku</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}