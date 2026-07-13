import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { BookOpen, BrainCircuit, Check, ChevronRight, Dumbbell, GraduationCap, Headphones, Mail, MapPin, Phone, Sparkles, Target, Users } from 'lucide-react';
import { ACADEMIC_GOALS, HOBBIES, PORTFOLIO_GOALS, PROFILE } from '../data';
import type { Tab } from '../types';

interface HomeViewProps {
  setTab: (tab: Tab) => void;
}

const hobbyIcons = { Dumbbell, Headphones, BookOpen, Users };

export default function HomeView({ setTab }: HomeViewProps) {
  return (
    <div className="space-y-20 md:space-y-28">
      <section className="grid md:grid-cols-[1.12fr_.88fr] gap-10 items-center min-h-[620px]">
        <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="space-y-7 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-primary-container px-4 py-2 text-xs font-bold text-primary shadow-sm">
            <Sparkles size={14} /> Xin chào, mình là Quỳnh Anh!
          </div>
          <div>
            <p className="uppercase tracking-[0.24em] text-[11px] md:text-xs font-bold text-[#aa6578] mb-3">Ngôn ngữ Hàn Quốc · ULIS</p>
            <h1 className="font-headline text-[44px] sm:text-6xl md:text-[68px] font-bold leading-[1.04] text-on-background">
              Nguyễn Đặng<br /><span className="serif-accent text-primary italic font-medium">Quỳnh Anh</span>
            </h1>
          </div>
          <p className="text-base md:text-lg text-on-surface-variant leading-8 max-w-2xl">
            Một cô gái năng động, vui tính và dễ kết nối. Mình yêu những trải nghiệm mới, thích học hỏi từ mọi người và đang từng bước biến công nghệ thành người bạn đồng hành trong học tập.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <span className="profile-chip"><GraduationCap size={16} /> MSSV {PROFILE.studentId}</span>
            <span className="profile-chip"><MapPin size={16} /> {PROFILE.school}</span>
            <span className="profile-chip"><BrainCircuit size={16} /> {PROFILE.course}</span>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <button onClick={() => setTab('assignments')} className="btn-primary">Khám phá 6 bài tập <ChevronRight size={18} /></button>
            <a href="#about" className="btn-secondary">Tìm hiểu về mình</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, type: 'spring' }} className="order-1 md:order-2 relative max-w-[470px] mx-auto w-full">
          <div className="absolute -inset-4 bg-primary-container/55 rounded-[44px] rotate-3" />
          <div className="relative bg-white p-3 rounded-[38px] shadow-[0_26px_70px_rgba(153,88,105,.22)] border border-white">
            <img src="/a1.jpg" alt="Chân dung Nguyễn Đặng Quỳnh Anh" className="w-full aspect-[4/3] md:aspect-[4/4.7] object-cover rounded-[30px]" />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-3 shadow-lg border border-primary-container -rotate-3">
              <p className="text-xs uppercase tracking-widest text-secondary font-bold">Hello from</p>
              <p className="font-headline font-bold text-primary">ULIS ♡</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="scroll-mt-24 grid lg:grid-cols-[.82fr_1.18fr] gap-8 items-stretch">
        <motion.div whileHover={{ rotate: -1, y: -4 }} className="relative bg-[#f9dfe7] p-4 rounded-[34px] shadow-kawaii-card overflow-hidden min-h-[520px]">
          <img src="/a2.jpg" alt="Quỳnh Anh trong ngày kỷ niệm" className="w-full h-full min-h-[488px] object-cover object-top rounded-[26px]" />
          <div className="absolute bottom-8 left-8 right-8 bg-white/88 backdrop-blur-md rounded-2xl p-4 border border-white shadow-lg">
            <p className="font-headline font-bold text-primary">Năng động · Vui tính · Dễ kết nối</p>
            <p className="text-xs text-secondary mt-1">Mình tin mỗi cuộc gặp gỡ đều mang đến một điều đáng học hỏi.</p>
          </div>
        </motion.div>

        <div className="bg-white/72 backdrop-blur-sm rounded-[34px] border border-surface-variant p-7 md:p-10 shadow-kawaii-card">
          <p className="section-kicker">About me</p>
          <h2 className="section-title">Một chút về mình</h2>
          <p className="text-on-surface-variant leading-7 mt-5">
            Mình là <strong className="text-on-background">Nguyễn Đặng Quỳnh Anh</strong>, sinh viên ngành Ngôn ngữ Hàn Quốc tại Trường Đại học Ngoại ngữ - ĐHQGHN. Với tính cách năng động, vui vẻ và cởi mở, mình luôn hào hứng trước những cơ hội được làm việc cùng người khác, khám phá tri thức mới và hoàn thiện bản thân.
          </p>
          <p className="text-on-surface-variant leading-7 mt-4">
            Portfolio này ghi lại sáu sản phẩm tiêu biểu của học phần Nhập môn Công nghệ số và Ứng dụng trí tuệ nhân tạo, đồng thời phản ánh quá trình mình học cách sử dụng công nghệ hiệu quả, sáng tạo và có trách nhiệm.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {HOBBIES.map((hobby, index) => {
              const Icon = hobbyIcons[hobby.icon as keyof typeof hobbyIcons];
              return (
                <motion.article key={hobby.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -5, rotate: index % 2 ? 1 : -1 }} className="rounded-2xl bg-surface-container-low p-5 border border-white shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm mb-3"><Icon size={20} /></div>
                  <h3 className="font-headline font-bold text-on-background">{hobby.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-6 mt-1">{hobby.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="section-kicker">Learning direction</p>
          <h2 className="section-title">Mục tiêu & định hướng</h2>
          <p className="text-secondary mt-3">Mỗi mục tiêu là một lời nhắc để mình học chủ động hơn và sử dụng công nghệ đúng cách hơn.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <GoalCard icon={<Target />} label="Mục tiêu học tập" goals={ACADEMIC_GOALS} color="bg-[#fff2f5]" />
          <GoalCard icon={<Sparkles />} label="Mục tiêu Portfolio" goals={PORTFOLIO_GOALS} color="bg-[#f4effb]" />
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[36px] bg-[#3c2930] text-white p-8 md:p-12 shadow-2xl">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#f7abc0]/20 rounded-full blur-2xl" />
        <div className="relative grid md:grid-cols-[1.05fr_.95fr] gap-8 items-center">
          <div>
            <p className="uppercase tracking-[.22em] text-[11px] text-[#f5b4c6] font-bold">Keep in touch</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">Kết nối với mình nhé!</h2>
            <p className="text-white/70 leading-7 mt-4 max-w-xl">Mình luôn sẵn sàng đón nhận những chia sẻ, góp ý và cơ hội học hỏi mới từ thầy cô, bạn bè.</p>
          </div>
          <div className="grid gap-3">
            <a href={`mailto:${PROFILE.email}`} className="contact-row"><Mail size={19} /><span><small>Email</small>{PROFILE.email}</span></a>
            <div className="contact-row"><Phone size={19} /><span><small>Số điện thoại</small>{PROFILE.phone}</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GoalCard({ icon, label, goals, color }: { icon: ReactNode; label: string; goals: { id: string; text: string }[]; color: string }) {
  return (
    <motion.article whileHover={{ y: -5 }} className={`${color} rounded-[30px] p-7 md:p-9 border border-white shadow-kawaii-card`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center shadow-sm">{icon}</div>
        <h3 className="font-headline text-xl font-bold">{label}</h3>
      </div>
      <div className="space-y-4">
        {goals.map((goal) => <div key={goal.id} className="flex gap-3 text-sm md:text-base text-on-surface-variant leading-7"><span className="mt-1 w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center shrink-0"><Check size={14} strokeWidth={3} /></span><p>{goal.text}</p></div>)}
      </div>
    </motion.article>
  );
}
