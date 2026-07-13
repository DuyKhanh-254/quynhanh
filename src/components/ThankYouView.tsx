import { motion } from 'motion/react';
import { ArrowLeft, BrainCircuit, Heart, Scale, Sparkles } from 'lucide-react';

export default function ThankYouView({ onHome }: { onHome: () => void }) {
  return (
    <div className="space-y-12">
      <section className="text-center max-w-5xl mx-auto pt-4">
        <p className="section-kicker">Final reflection</p>
        <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight mt-3">Một hành trình<br /><span className="serif-accent text-primary italic font-medium">hoàn thiện bản thân</span></h1>
        <p className="text-sm md:text-base text-on-surface-variant leading-7 mt-5">Những thay đổi, trải nghiệm và suy ngẫm mình giữ lại sau học phần Công nghệ số và Trí tuệ nhân tạo.</p>
      </section>

      <section className="reflection-grid">
        <motion.article whileHover={{ y: -5 }} className="reflection-card bg-[#f8c7d6] md:col-span-7">
          <span className="reflection-icon"><Sparkles /></span>
          <p className="section-kicker">01 · Tổng kết</p>
          <h2 className="reflection-title">Không chỉ là việc tổng hợp bài tập</h2>
          <p>Dự án Portfolio này là một hành trình “hoàn thiện bản thân” trên không gian số. Sau khi thực hiện dự án, mình cảm thấy đã có thể làm chủ hơn việc sử dụng công nghệ số và trí tuệ nhân tạo, cũng như ứng dụng chúng vào những nhiệm vụ trong đời sống và học tập. Các công cụ AI không chỉ là phần mềm vô tri mà còn là trợ thủ đắc lực, luôn sẵn sàng hỗ trợ mình trong những lúc khó khăn.</p>
        </motion.article>

        <motion.article whileHover={{ y: -5 }} className="reflection-card bg-[#3c2930] text-white md:col-span-5">
          <span className="reflection-icon !bg-white/10 !text-[#f8c7d6]"><BrainCircuit /></span>
          <p className="section-kicker !text-[#f5afc2]">02 · Bài học rút ra</p>
          <h2 className="reflection-title">Tự tin hơn trong thời đại số</h2>
          <p className="!text-white/72">Thông qua dự án và cả học phần, mình học thêm nhiều kỹ năng, có nhiều trải nghiệm mới và biết kết hợp các công cụ làm việc để hoàn thành bài tập chỉn chu. Học cách làm chủ công nghệ giúp mình tự tin hơn, cảm thấy bản thân có giá trị hơn và luôn sẵn sàng tiếp nhận tri thức mới.</p>
        </motion.article>

        <motion.article whileHover={{ y: -5 }} className="reflection-card bg-[#eee6fa] md:col-span-5">
          <span className="reflection-icon"><Scale /></span>
          <p className="section-kicker">03 · Thách thức</p>
          <h2 className="reflection-title">Tiện lợi đi cùng liêm chính</h2>
          <p>Khó khăn lớn là chọn lọc thông tin giữa “biển” dữ liệu do AI cung cấp — cũng là ranh giới giữa sự tiện lợi và liêm chính. Vì vậy, mình luôn nhắc bản thân nâng cao nhận thức, đọc hiểu sâu, kiểm chứng điều đúng và hiểu rõ công việc mình đang làm để hành động phù hợp, đúng chuẩn mực.</p>
        </motion.article>

        <motion.article whileHover={{ y: -5 }} className="reflection-card bg-white md:col-span-7">
          <span className="reflection-icon"><Heart fill="currentColor" /></span>
          <p className="section-kicker">04 · Lời cảm ơn</p>
          <h2 className="reflection-title">Gửi đến các thầy cô</h2>
          <p>Em cảm ơn các thầy cô đã luôn tận tâm giúp đỡ, hỗ trợ sinh viên chúng em trong học phần mới mà chúng em là những người trải nghiệm đầu tiên. Trong quá trình học tập, chúng em khó tránh khỏi những sai sót; em rất mong thầy cô tiếp tục tạo điều kiện để chúng em có thể hoàn thành học phần một cách tốt đẹp nhất ạ!</p>
          <div className="mt-6 pt-5 border-t border-surface-variant"><p className="font-headline text-xl font-bold text-primary italic">Trân trọng, Nguyễn Đặng Quỳnh Anh ♡</p></div>
        </motion.article>
      </section>

      <section className="rounded-[34px] bg-gradient-to-r from-[#f8d6e0] via-white to-[#eee6fa] p-8 md:p-12 text-center border border-white shadow-kawaii-card">
        <p className="serif-accent text-3xl md:text-4xl lg:text-[42px] leading-[1.35] italic text-primary">“Công nghệ có ý nghĩa khi giúp mình học sâu hơn, sáng tạo tốt hơn và hành động có trách nhiệm hơn.”</p>
        <button onClick={onHome} className="btn-primary mt-8 mx-auto"><ArrowLeft size={17} /> Trở về trang chủ</button>
      </section>
    </div>
  );
}
