import { motion } from 'motion/react';
import { ArrowUpRight, FolderTree, MessageSquareText, SearchCheck, ShieldCheck, UsersRound, WandSparkles } from 'lucide-react';
import { ASSIGNMENTS } from '../data';
import type { Assignment } from '../types';

interface AssignmentsViewProps {
  onOpen: (assignment: Assignment) => void;
}

const icons = { FolderTree, SearchCheck, MessageSquareText, UsersRound, WandSparkles, ShieldCheck };

export default function AssignmentsView({ onOpen }: AssignmentsViewProps) {
  return (
    <div className="space-y-12">
      <section className="text-center max-w-3xl mx-auto pt-3">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="inline-flex items-center gap-2 rounded-full bg-primary-container/70 border border-white px-4 py-2 text-xs font-bold text-primary shadow-sm">
          06 sản phẩm học tập
        </motion.div>
        <h1 className="font-headline text-4xl md:text-6xl font-bold mt-5 leading-tight">Hành trình công nghệ số<br /><span className="serif-accent text-primary italic font-medium">qua từng bài tập</span></h1>
        <p className="text-on-surface-variant leading-7 mt-5 max-w-2xl mx-auto">Mỗi bài tập là một cột mốc nhỏ, ghi lại quá trình mình thực hành, thử nghiệm, điều chỉnh và rút ra bài học. Nhấn vào từng thẻ để đọc toàn bộ báo cáo cùng hình ảnh gốc.</p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ASSIGNMENTS.map((assignment, index) => {
          const Icon = icons[assignment.icon as keyof typeof icons];
          return (
            <motion.button
              key={assignment.id}
              onClick={() => onOpen(assignment)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -10, rotate: index % 2 ? 0.8 : -0.8 }}
              whileTap={{ scale: 0.98 }}
              className="assignment-card text-left cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <span className="assignment-number" style={{ backgroundColor: `${assignment.accent}55`, color: '#704552' }}>0{assignment.id}</span>
                <ArrowUpRight className="text-secondary group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mt-9 shadow-sm border border-white" style={{ backgroundColor: assignment.accent }}>
                <Icon size={26} className="text-white" />
              </div>
              <p className="uppercase tracking-[.16em] text-[10px] font-bold text-primary mt-6">{assignment.shortTitle}</p>
              <h2 className="font-headline text-xl font-bold leading-7 mt-2 text-on-background">{assignment.title}</h2>
              <p className="text-sm text-on-surface-variant leading-6 mt-3">{assignment.subtitle}</p>
              <div className="mt-7 pt-5 border-t border-surface-variant flex items-center justify-between text-sm font-bold text-primary">
                <span>Xem nội dung đầy đủ</span><span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.button>
          );
        })}
      </section>

      <div className="rounded-[28px] bg-[#3c2930] text-white p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-5">
        <div><p className="text-xs uppercase tracking-[.2em] text-[#f1a9bd] font-bold">Learning archive</p><h3 className="font-headline text-2xl font-bold mt-1">Sáu bài tập · Một hành trình trưởng thành</h3></div>
      </div>
    </div>
  );
}
