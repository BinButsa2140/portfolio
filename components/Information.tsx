import {
  Mail,
  Phone,
  GraduationCap,
  Code2,
  Layers,
  Wrench,
} from "lucide-react";

const Information = () => {
  // ข้อมูล Tech Stack แยกตามหมวดหมู่
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-gray-500" />,
      skills: [
        "TypeScript",
        "JavaScript",
        "SQL",
        "Golang",
        "Python",
        "Java",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5 text-gray-500" />,
      skills: [
        "Node.js",
        "NestJS",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Vite",
        "Jest",
      ],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5 text-gray-500" />,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Git",
        "GitHub",
        "GitLab",
        "Postman",
        "DBeaver",
        "Figma",
        "Docker",
      ],
    },
  ];

  return (
    // เพิ่ม overflow-hidden เพื่อให้รูปภาพปก (Cover) โค้งรับกับมุมของกล่องหลัก
    <div className="max-w-5xl mx-auto my-10 rounded-[2.5rem] shadow-2xl bg-white/40 -2xl border border-white/50 text-gray-800 overflow-hidden">
      {/* ==========================================
          1. ส่วนรูปภาพปก (Cover Photo) ฟีล Facebook
          ========================================== */}
      <div className="relative w-full h-48 md:h-64 bg-gray-200/50 group flex items-center justify-center border-b border-white/50">
        <span className="text-gray-400 text-sm font-medium absolute z-10">
          Insert Cover Photo
        </span>

        {/* วิธีใส่รูปภาพจริง: 
            นำรูปภาพของคุณไปไว้ในโฟลเดอร์ public/ แล้วเอาคอมเมนต์โค้ดด้านล่างนี้ออก 
        */}
        {/* <img 
          src="/cover-image.jpg" 
          alt="Cover" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        /> */}

        {/* เลเยอร์ไล่สี (Gradient Overlay) เพื่อให้ข้อความด้านล่างดูกลืนกัน */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
      </div>

      {/* ==========================================
          2. ส่วนข้อมูลส่วนตัวและประวัติ
          ========================================== */}
      <div className="p-8 md:p-12 space-y-8">
        {/* ส่วนหัว: ชื่อ ตำแหน่ง และช่องทางการติดต่อ */}
        <div className="flex flex-col gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-2">
              Binsung Butsabong
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600">
              Full-Stack Developer
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 text-sm md:text-base text-gray-500 font-medium justify-center md:justify-start">
            <span className="flex items-center gap-2 justify-center">
              <Mail className="w-4 h-4" /> binsung.butsabong@gmail.com
            </span>
            <span className="flex items-center gap-2 justify-center">
              <Phone className="w-4 h-4" /> (+66) 087-057-4516
            </span>
            <span className="flex items-center gap-2 justify-center">
              
            </span>
          </div>
        </div>

        {/* บทสรุป (Summary) */}
        <p className="text-gray-600 leading-relaxed md:text-lg text-center md:text-left">
          Full-Stack Developer with hands-on experience in System Design,
          Migration, and Automation. Proficient in designing web architectures
          and integrating LLMs for document processing. Passionate about
          building impactful products and writing reliable code.
        </p>

        {/* ประวัติการศึกษา (Education Highlight) */}
        <div className="flex justify-center md:justify-start">
          <div className="bg-white/40 p-5 rounded-3xl border border-white/50 inline-block w-full lg:w-auto text-left shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/60 rounded-full shadow-sm">
                <GraduationCap className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="font-bold text-gray-800">Kasetsart University</p>
                <p className="text-sm font-medium text-gray-600 mt-1">
                  B.S. Computer Science (First Class Honours)
                </p>
                <p className="text-sm text-gray-500">GPA: 3.84</p>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. ทักษะทางเทคนิค (Tech Stack) แยกหมวดหมู่
            ========================================== */}
        <div className="space-y-6 pt-4 border-t border-gray-200/50">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center md:text-left">
            Technical Skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  {category.icon}
                  <span className="font-semibold text-gray-700">
                    {category.title}
                  </span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {category.skills.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/50 hover:bg-white/80 transition-all duration-300 border border-white/50 rounded-xl text-sm font-medium text-gray-700 shadow-sm -md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
