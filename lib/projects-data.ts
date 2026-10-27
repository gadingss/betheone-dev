export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  images?: string[];
  link: string;
  github: string;
};

export const projects: Project[] = [
  {
    slug: "nexora",
    title: "Nexora",
    description: "Platform Web3 & on-chain analytics dengan antarmuka financial terminal berperforma tinggi untuk trader dan antusias crypto.",
    longDescription: "NEXORA adalah platform Web3 & on-chain analytics komprehensif dengan antarmuka financial terminal berperforma tinggi. Platform ini membantu trader dan antusias crypto memantau pergerakan pasar secara live, melacak aktivitas wallet paus & smart money, memeriksa transaksi on-chain via Etherscan & EVM RPC, serta melakukan simulasi paper trading berbasis data market real-time.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/projects/nexora/nexora.png",
    images: [
      "/projects/nexora/nexora.png",
      "/projects/nexora/details/1.png",
      "/projects/nexora/details/2.png",
    ],
    link: "https://nexora.geedev.tech/",
    github: "#",
  },
  {
    slug: "skypulse",
    title: "SkyPulse",
    description: "Aplikasi cuaca real-time dengan tampilan visual yang imersif, prakiraan 7 hari, dan notifikasi kondisi cuaca ekstrem.",
    longDescription: "Aplikasi cuaca modern yang menyajikan kondisi cuaca real-time berdasarkan lokasi pengguna, prakiraan 7 hari ke depan, peta cuaca interaktif, dan notifikasi push untuk cuaca ekstrem. Menggunakan OpenWeather API dengan animasi latar yang berubah sesuai kondisi cuaca.",
    tech: ["React", "TypeScript", "OpenWeather API", "Tailwind CSS"],
    image: "/projects/skypulse/skypulse.png",
    images: [
      "/projects/skypulse/skypulse.png",
      "/projects/skypulse/details/1.png",
      "/projects/skypulse/details/2.png",
    ],
    link: "#",
    github: "#",
  },
  {
    slug: "dashboard-monitoring-perikanan",
    title: "Dashboard Monitoring Perikanan",
    description: "Sistem pengujian penyakit ikan dan kualitas air untuk pemantauan akuakultur dengan analisis data real-time dan laporan laboratorium.",
    longDescription: "SIMOLI-CEKAT adalah sistem khusus untuk pengujian penyakit ikan dan kualitas air yang dirancang untuk pemantauan akuakultur. Sistem ini memungkinkan pengguna mencatat hasil uji penyakit, parameter kualitas air, dan memelihara laporan laboratorium terperinci. Sistem ini menyediakan analisis data waktu nyata, pelacakan riwayat, dan dokumentasi komprehensif untuk operasi peternakan ikan, memastikan kontrol kualitas dan pencegahan penyakit.",
    tech: ["React", "Chart.js", "Node.js", "MongoDB"],
    image: "/projects/dashboard-perikanan/simoli-cekat.png",
    images: [
      "/projects/dashboard-perikanan/simoli-cekat.png",
      "/projects/dashboard-perikanan/details/1.png",
      "/projects/dashboard-perikanan/details/2.png",
    ],
    link: "#",
    github: "#",
  },
  {
    slug: "minikiyo-dimsum",
    title: "Minikiyo Dimsum",
    description: "Website branding dan pemesanan online untuk brand dimsum premium dengan tampilan yang menggugah selera.",
    longDescription: "Website branding untuk brand dimsum premium yang menampilkan menu produk, story brand, dan sistem pemesanan online. Desain visual yang hangat dan menggugah selera dengan animasi halus, galeri produk, dan integrasi WhatsApp untuk pemesanan langsung.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/minikiyo-dimsum/minikiyo.png",
    images: [
      "/projects/minikiyo-dimsum/minikiyo.png",
      "/projects/minikiyo-dimsum/details/1.png",
      "/projects/minikiyo-dimsum/details/2.png",
      "/projects/minikiyo-dimsum/details/3.png",
      "/projects/minikiyo-dimsum/details/4.png",
    ],
    link: "#",
    github: "#",
  },
  {
    slug: "ecommerce-tech-store",
    title: "E-Commerce Tech Store",
    description: "Toko online lengkap untuk produk teknologi dengan fitur keranjang belanja, pembayaran, dan manajemen stok.",
    longDescription: "Platform e-commerce lengkap untuk penjualan produk teknologi dengan fitur pencarian dan filter produk, keranjang belanja, checkout multi-step, integrasi pembayaran Stripe, manajemen stok real-time, dan dashboard admin untuk kelola pesanan dan laporan penjualan.",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    image: "/projects/ecommerce-tech-store/details/ecommerce-tech-store.jpeg",
    images: [
      "/projects/ecommerce-tech-store/details/ecommerce-tech-store.jpeg",
    ],
    link: "#",
    github: "#",
  },
  {
    slug: "task-workspace-manager",
    title: "Task & Workspace Manager",
    description: "Aplikasi manajemen tugas dan ruang kerja tim dengan fitur kolaborasi real-time, kanban board, dan pelacakan progres.",
    longDescription: "Aplikasi produktivitas tim dengan kanban board, manajemen sprint, pelacakan waktu, dan kolaborasi real-time via Socket.io. Anggota tim dapat berkomentar, melampirkan file, menetapkan deadline, dan mendapat notifikasi instan untuk setiap perubahan status tugas.",
    tech: ["React", "TypeScript", "Socket.io", "MongoDB"],
    image: "/projects/task-workspace-manager/details/task-workspace-manager.jpeg",
    images: [
      "/projects/task-workspace-manager/details/task-workspace-manager.jpeg",
    ],
    link: "#",
    github: "#",
  },
  {
    slug: "lbb-number-one",
    title: "LBB Number One",
    description: "Sistem informasi dan landing page untuk lembaga bimbingan belajar dengan fitur pendaftaran siswa dan jadwal kelas online.",
    longDescription: "Platform digital untuk lembaga bimbingan belajar yang mencakup landing page informatif, sistem pendaftaran siswa online, jadwal kelas interaktif, manajemen pengajar, dan laporan perkembangan belajar siswa yang dapat diakses orang tua.",
    tech: ["Next.js", "Tailwind CSS", "MySQL", "Laravel"],
    image: "/projects/lbb-number-one/lbb-number-one.png",
    images: [
      "/projects/lbb-number-one/lbb-number-one.png",
      "/projects/lbb-number-one/details/1.png",
      "/projects/lbb-number-one/details/2.png",
    ],
    link: "#",
    github: "#",
  },
  {
    slug: "personal-finance-dashboard",
    title: "Personal Finance Dashboard",
    description: "Dashboard keuangan personal untuk mencatat pemasukan, pengeluaran, anggaran bulanan, dan visualisasi laporan keuangan interaktif.",
    longDescription: "Aplikasi manajemen keuangan personal yang membantu pengguna mencatat pemasukan dan pengeluaran, menetapkan anggaran per kategori, memantau progres tabungan, dan menganalisis kebiasaan finansial melalui grafik interaktif dan laporan bulanan yang detail.",
    tech: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    image: "/projects/personal-finance-dashboard/details/personal-finance-dashboard.jpeg",
    images: [
      "/projects/personal-finance-dashboard/details/personal-finance-dashboard.jpeg",
    ],
    link: "#",
    github: "#",
  },
  {
    slug: "lemeraude-culinary-landing",
    title: "L'Émeraude Culinary Landing",
    description: "Landing page premium untuk restoran fine dining bergaya Prancis dengan atmosfer mewah dan sistem reservasi meja online.",
    longDescription: "Landing page mewah untuk restoran fine dining L'Émeraude yang menampilkan menu eksklusif, galeri suasana restoran, profil chef, dan sistem reservasi meja online terintegrasi. Animasi scroll yang halus dan tipografi premium menciptakan pengalaman visual yang sesuai dengan brand premium.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/projects/lemeraude-culinary/details/lemeraude-culinary.png",
    images: [
      "/projects/lemeraude-culinary/details/lemeraude-culinary.png",
      "/projects/lemeraude-culinary/details/1.png",
      "/projects/lemeraude-culinary/details/2.png",
    ],
    link: "#",
    github: "#",
  },
  {
    slug: "zidan-trans-booking",
    title: "Zidan Trans Booking System",
    description: "Sistem reservasi dan manajemen armada travel dengan fitur pembayaran terintegrasi dan dashboard admin komprehensif.",
    longDescription: "Platform reservasi travel berbasis web yang memungkinkan pelanggan memesan tiket, memilih kursi, dan melakukan pembayaran secara online. Dilengkapi dashboard admin untuk manajemen armada, jadwal keberangkatan, laporan pendapatan, dan notifikasi real-time.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
  {
    slug: "design-system-ui-kit",
    title: "Design System & UI Kit",
    description: "Sistem desain komprehensif dengan komponen UI yang konsisten, dokumentasi interaktif, dan panduan gaya untuk tim produk.",
    longDescription: "Design system lengkap yang mencakup 60+ komponen UI yang dapat digunakan ulang, token desain (warna, tipografi, spacing), panduan aksesibilitas, dan dokumentasi interaktif di Storybook. Dirancang untuk mempercepat pengembangan produk dengan konsistensi visual yang terjaga.",
    tech: ["React", "Storybook", "Figma Tokens", "TypeScript"],
    image: "/projects/design-system-ui-kit/details/design-system-ui-kit.jpeg",
    images: [
      "/projects/design-system-ui-kit/details/design-system-ui-kit.jpeg",
    ],
    link: "#",
    github: "#",
  },
];
