import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function Privacy() {
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
                  <Shield className="w-5 h-5 text-white" />
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
            Kebijakan Privasi
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
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Pendahuluan</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di SARNO WAHYUDI Transport. Kami sangat memahami pentingnya privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
                pribadi Anda saat menggunakan layanan transportasi kami.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Informasi yang Kami Kumpulkan</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Nama lengkap dan identitas diri</li>
                    <li>Nomor telepon dan alamat email</li>
                    <li>Alamat lengkap (tempat penjemputan dan tujuan)</li>
                    <li>Informasi pembayaran dan tagihan</li>
                    <li>Nomor identitas (KTP/SIM/Paspor)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Informasi Layanan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Riwayat pemesanan dan perjalanan</li>
                    <li>Jenis layanan yang digunakan</li>
                    <li>Informasi barang yang diangkut</li>
                    <li>Waktu dan durasi penggunaan layanan</li>
                    <li>Preferensi layanan dan feedback</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Alamat IP dan lokasi GPS</li>
                    <li>Jenis perangkat dan browser</li>
                    <li>Informasi log dan penggunaan website</li>
                    <li>Cookies dan data tracking</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Penggunaan Informasi</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Kami menggunakan informasi yang kami kumpulkan untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyediakan dan mengelola layanan transportasi yang Anda pesan</li>
                  <li>Memproses pembayaran dan tagihan</li>
                  <li>Mengkomunikasikan informasi terkait pemesanan Anda</li>
                  <li>Memperbaiki dan mengembangkan layanan kami</li>
                  <li>Memberikan dukungan pelanggan yang lebih baik</li>
                  <li>Memastikan keamanan dan mencegah penipuan</li>
                  <li>Mematuhi kewajiban hukum dan peraturan</li>
                  <li>Mengirimkan informasi promosi (dengan persetujuan Anda)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Keamanan Data</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Kami berkomitmen untuk melindungi informasi pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas hanya untuk authorized personnel</li>
                  <li>Sistem keamanan berlapis untuk mencegah akses tidak sah</li>
                  <li>Regular security audits dan updates</li>
                  <li>Training karyawan tentang keamanan data</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Namun, perlu diingat bahwa tidak ada sistem yang 100% aman. Kami tidak dapat menjamin keamanan absolut data Anda.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau cara kami menangani data pribadi Anda, 
                  silakan hubungi kami:
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
                      <span className="ml-2">privacy@sarnowahyudi-transport.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}