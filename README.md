# ITSquareOne-Frontsite
วิธีเปิด
1.cd เข้า itsquare-app
2.npm run dev
EZ

** For editing **
Sample directory หน้าตาประมาณนี้จ้าเวลาจะทำหน้าเพิ่มก็ทำตามนี้เลย
src/app/
│── layout.tsx        # Layout หลักของทุกหน้า
│── page.tsx          # หน้าแรก (Homepage `/`)
│
├── about/
│   ├── page.tsx      # `/about`
│   ├── layout.tsx    # Layout เฉพาะหน้า `/about` (ถ้ามี)
│
├── blog/
│   ├── page.tsx      # `/blog`
│   ├── [slug]/
│   │   ├── page.tsx  # Dynamic Route `/blog/:slug`
│
├── contact/
│   ├── page.tsx      # `/contact`
│
└── dashboard/
    ├── layout.tsx    # Layout เฉพาะ Dashboard (Navbar อาจไม่เหมือนกัน)
    ├── page.tsx      # `/dashboard`
    ├── settings/
    │   ├── page.tsx 

*** อย่าลืมลง Tailwind CSS IntelliSense for upgrade ur life quality ***
