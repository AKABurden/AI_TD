// Bản DANAI đã nối khung chat với phản hồi demo và localStorage.
import { useEffect, useRef, useState, type ReactNode } from 'react'
import logoThanhDanh from './imports/logoThanhDanh.png'
 
// ─── Icons (inline SVG) ─────────────────────────────────────────────────────

const IconChat = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)
const IconStudio = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const IconNotebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
)
const IconMic = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
)
const IconRobot = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="15" x2="8" y2="15"/><line x1="16" y1="15" x2="16" y2="15"/>
  </svg>
)
const IconFolder = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
)
const IconTool = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)
const IconHistory = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/>
  </svg>
)
const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)
const IconSend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)
const IconPlus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const IconImage = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
  </svg>
)
const IconVideo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
)
const IconMusic = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
  </svg>
)
const IconFileText = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
)
const IconUpload = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
)
const IconBell = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
)
const IconSettings = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
)
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const IconArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)
const IconInfo = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)
const IconBarChart = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
)
const IconDoc = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
  </svg>
)

// ─── Types ──────────────────────────────────────────────────────────────────

type Page = 'chat' | 'studio' | 'studio-chart' | 'studio-infographic' | 'studio-slide' | 'notebook' | 'notebook-workspace' | 'assistant' | 'project' | 'tools' | 'history' | 'meeting'
type ChatRole = 'user' | 'assistant'

type ChatMessage = {
  id: string
  role: ChatRole
  content: string
  createdAt: string
  model: string
}

type ChatConversation = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  messages: ChatMessage[]
}

const CHAT_HISTORY_KEY = 'danai-chat-history-v1'

function createId() {
  return crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`
}

function loadChatHistory(): ChatConversation[] {
  try {
    const saved = localStorage.getItem(CHAT_HISTORY_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function getDemoReply(question: string): string {
  const value = question
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  if (value.includes('credit') || value.includes('so du')) {
    return 'Tài khoản demo của bạn hiện còn 500 Credit. Bạn có thể gửi yêu cầu nạp Credit từ nút Nạp Credit ở góc trên bên phải.'
  }

  if (value.includes('notebook') || value.includes('tai lieu')) {
    return 'Notebook hỗ trợ phân tích dữ liệu và nghiên cứu tài liệu theo nguồn. Bạn có thể tải tài liệu lên, chọn nguồn và đặt câu hỏi trong phạm vi tài liệu.'
  }

  if (value.includes('cuoc hop') || value.includes('ghi am')) {
    return 'Ghi chép cuộc họp hỗ trợ ghi âm từ micro, tab trình duyệt hoặc tải file lên. Giới hạn demo là 3 giờ và tối đa 500 MB.'
  }

  if (value.includes('hinh anh')) {
    return 'Bạn có thể vào AI Studio để tạo hình ảnh, chỉnh sửa hình ảnh, xóa nền hoặc nâng chất lượng ảnh.'
  }

  return 'Đây là phản hồi từ chế độ Demo. Hiện tại hệ thống chưa kết nối API AI. Bạn có thể hỏi về Credit, Notebook, AI Studio hoặc ghi chép cuộc họp.'
}
// ─── Sub-components ─────────────────────────────────────────────────────────

function Badge({ label, color = 'orange' }: { label: string; color?: string }) {
  const cls = color === 'orange'
    ? 'bg-stone-100 text-stone-800 border border-stone-200'
    : 'bg-blue-100 text-blue-600 border border-blue-200'
  return (
    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ml-1.5 ${cls}`}>
      {label}
    </span>
  )
}

function Sidebar({ page, setPage, setShowPromptLib, onAdmin }: {
  page: Page
  setPage: (p: Page) => void
  setShowPromptLib: (v: boolean) => void
  onAdmin: () => void
}) {
  const nav = [
    { id: 'chat', label: 'Trò chuyện', icon: <IconChat /> },
    { id: 'studio', label: 'AI Studio', icon: <IconStudio />, badge: '🔥' },
    { id: 'notebook', label: 'Notebook', icon: <IconNotebook />, new: true },
    { id: 'meeting', label: 'Ghi chép cuộc họp', icon: <IconMic />, new: true },
    { id: 'assistant', label: 'Trợ lý AI', icon: <IconRobot /> },
    { id: 'project', label: 'Dự án', icon: <IconFolder /> },
    { id: 'tools', label: 'Công cụ', icon: <IconTool /> },
    { id: 'history', label: 'Lịch sử', icon: <IconHistory /> },
  ] as const

  return (
    <aside className="w-50 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-4 border-b border-gray-100">
        <img src={logoThanhDanh} alt="Logo" className="w-25 h-25 rounded-lg" />
        <span className="font-bold text-gray-900 text-[15px] tracking-tight ">DANAI</span>
      </div>

      {/* Search */}
      <div className="px-3 pt-3 pb-2">
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors">
          <IconSearch />
          <span className="text-sm">Tìm kiếm</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-1 overflow-y-auto space-y-0.5">
        {nav.map((item) => {
          const isActive = page === item.id ||
            (item.id === 'notebook' && (page === 'notebook' || page === 'notebook-workspace'))
          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id as Page)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all text-left ${
                isActive
                  ? 'bg-stone-50 text-stone-800'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className={isActive ? 'text-stone-700' : 'text-gray-400'}>{item.icon}</span>
              <span className="flex-1 truncate">{item.label}</span>
              {'badge' in item && item.badge && <span className="text-base">{item.badge}</span>}
              {'new' in item && item.new && <Badge label="Mới" />}
            </button>
          )
        })}
      </nav>

      {/* Promo banner */}
      <div className="m-3 rounded-xl bg-gradient-to-br from-amber-50 to-stone-50 border border-stone-100 p-3">
        <div className="w-full h-16 rounded-lg bg-gradient-to-br from-amber-100 to-pink-100 mb-2 flex items-center justify-center overflow-hidden">
          <span className="text-3xl">🤖</span>
        </div>
        <p className="text-xs font-semibold text-gray-700 mb-1.5">Khám phá tính năng mới!</p>
        <button className="w-full text-xs py-1.5 rounded-lg bg-white border border-stone-200 text-stone-800 font-medium hover:bg-stone-50 transition-colors">
          Xem ngay
        </button>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100 px-2 py-2">
        <button
          onClick={onAdmin}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          <IconSettings />
          <span>Quản trị và thiết lập</span>
        </button>
      </div>
    </aside>
  )
}

// ─── Nạp Credit Modal ─────────────────────────────────────────────────────────

const creditLevels = [
  { value: 500, label: '500 Credit', price: '50.000 đ', popular: false },
  { value: 1000, label: '1.000 Credit', price: '95.000 đ', popular: true },
  { value: 2000, label: '2.000 Credit', price: '180.000 đ', popular: false },
  { value: 5000, label: '5.000 Credit', price: '420.000 đ', popular: false },
  { value: 10000, label: '10.000 Credit', price: '800.000 đ', popular: false },
]

function NapCreditModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState(1000)
  const [reason, setReason] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4">✅</div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Yêu cầu đã được gửi!</h2>
          <p className="text-sm text-gray-500 mb-6">Quản trị viên sẽ xem xét và xử lý yêu cầu nạp credit của bạn trong thời gian sớm nhất.</p>
          <button onClick={onClose} className="px-8 py-2.5 bg-stone-700 hover:bg-stone-800 text-white rounded-xl text-sm font-medium transition-colors">
            Đóng
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Nạp Credit</h2>
            <p className="text-xs text-gray-400 mt-0.5">Chọn mức credit và gửi yêu cầu tới quản trị viên</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors"><IconX /></button>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Credit level selection */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-3 block">Chọn mức nạp <span className="text-red-400">*</span></label>
            <div className="grid grid-cols-2 gap-2.5">
              {creditLevels.map(lvl => (
                <button
                  key={lvl.value}
                  onClick={() => setSelected(lvl.value)}
                  className={`relative flex items-center justify-between px-4 py-3 rounded-xl border-2 text-left transition-all ${
                    selected === lvl.value
                      ? 'border-stone-600 bg-stone-50'
                      : 'border-gray-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  {lvl.popular && (
                    <span className="absolute -top-2 right-3 text-[10px] bg-stone-700 text-white px-2 py-0.5 rounded-full font-medium">
                      Phổ biến
                    </span>
                  )}
                  <div>
                    <p className={`text-sm font-semibold ${selected === lvl.value ? 'text-stone-800' : 'text-gray-700'}`}>
                      {lvl.label}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{lvl.price}</p>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selected === lvl.value ? 'border-stone-600 bg-stone-600' : 'border-gray-300'
                  }`}>
                    {selected === lvl.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Reason input */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Lý do yêu cầu <span className="text-red-400">*</span>
            </label>
            <textarea
              value={reason}
              onChange={e => setReason(e.target.value)}
              placeholder="Nhập lý do bạn cần nạp thêm credit (ví dụ: phục vụ dự án Q3, tạo nội dung marketing...)"
              rows={3}
              maxLength={300}
              className="w-full px-4 py-3 text-sm border-2 border-gray-200 focus:border-stone-400 rounded-xl outline-none resize-none placeholder-gray-400 transition-colors"
            />
            <div className="text-right text-xs text-gray-400 mt-1">{reason.length}/300</div>
          </div>

          {/* Summary */}
          <div className="bg-stone-50 rounded-xl px-4 py-3 flex items-center justify-between">
            <span className="text-sm text-gray-600">Mức đã chọn:</span>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#92400e"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <span className="text-sm font-bold text-stone-800">{selected.toLocaleString()} Credit</span>
              <span className="text-xs text-gray-400">({creditLevels.find(l => l.value === selected)?.price})</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Hủy
          </button>
          <button
            onClick={() => reason.trim() && setSubmitted(true)}
            disabled={!reason.trim()}
            className="px-6 py-2 bg-stone-700 hover:bg-stone-800 disabled:bg-gray-200 disabled:text-gray-400 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Gửi yêu cầu
          </button>
        </div>
      </div>
    </div>
  )
}

function TopBar({ setShowPromptLib, setPage }: { setShowPromptLib: (v: boolean) => void; setPage: (p: Page) => void }) {
  const [showCreditPopup, setShowCreditPopup] = useState(false)
  const [showNapModal, setShowNapModal] = useState(false)

  return (
    <>
      <header className="h-12 bg-white border-b border-gray-100 flex items-center justify-end px-4 gap-2 flex-shrink-0 relative">
        <button
          onClick={() => setShowPromptLib(true)}
          className="text-sm text-gray-600 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-1.5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Cài đặt extension
        </button>

        {/* Credit display — click to show popup */}
        <div className="relative">
          <button
            onClick={() => setShowCreditPopup(v => !v)}
            className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#92400e"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <span className="text-sm font-semibold text-gray-700">500</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>

          {showCreditPopup && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowCreditPopup(false)} />
              <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 z-20 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-gray-900">Số credit còn lại</span>
                  <button className="text-xs text-stone-700 hover:underline flex items-center gap-1">
                    Lịch sử biến động Credit <IconArrowRight />
                  </button>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      <span className="text-sm text-gray-700">Credit công ty</span>
                      <span className="ml-auto text-sm font-bold text-gray-900">500</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>Ngày hết hạn</span>
                    <span className="ml-auto font-semibold text-gray-900">12/09/2026</span>
                  </div>
                </div>
                <button
                  onClick={() => { setShowCreditPopup(false); setShowNapModal(true) }}
                  className="mt-4 w-full py-2 bg-stone-700 hover:bg-stone-800 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  Nạp Credit
                </button>
              </div>
            </>
          )}
        </div>

        <button
          onClick={() => setShowNapModal(true)}
          className="bg-stone-700 hover:bg-stone-800 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-colors"
        >
          Nạp Credit
        </button>

        <div className="flex items-center gap-1 ml-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
            <IconBell />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </button>
        </div>

        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-600 to-amber-700 flex items-center justify-center text-white text-xs font-bold ml-1 cursor-pointer shadow-sm">
          TD
        </div>
      </header>

      {showNapModal && <NapCreditModal onClose={() => setShowNapModal(false)} />}
    </>
  )
}

// ─── Model Selector ──────────────────────────────────────────────────────────

// ─── AI Brand Icons ───────────────────────────────────────────────────────────

function IconModelAuto() {
  return (
    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-stone-500 to-amber-600 flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    </div>
  )
}

function IconModelMisa() {
  return (
    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-700 to-stone-600 flex items-center justify-center">
      <span className="text-white text-xs font-black tracking-tighter">M</span>
    </div>
  )
}

function IconModelGPT() {
  return (
    <div className="w-7 h-7 rounded-full bg-[#10a37f] flex items-center justify-center">
      <svg width="15" height="15" viewBox="0 0 41 41" fill="white">
        <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.11-3.865 10.079 10.079 0 0 0-11.695 4.956 9.967 9.967 0 0 0-6.75 3.403 10.081 10.081 0 0 0 1.24 13.505 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.11 3.865 10.079 10.079 0 0 0 11.695-4.957 9.967 9.967 0 0 0 6.75-3.403 10.079 10.079 0 0 0-1.24-13.504zm-14.54 20.138a7.476 7.476 0 0 1-4.798-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.619zm-16.109-6.896a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zm-2.159-17.425a7.476 7.476 0 0 1 3.907-3.296c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L7.044 23.86a7.504 7.504 0 0 1-2.32-10.273zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.499v4.999l-4.331 2.5-4.331-2.5V18.068z"/>
      </svg>
    </div>
  )
}

function IconModelGemini() {
  return (
    <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
        <path d="M14 28C14 26.0633 13.6267 24.2433 12.88 22.54C12.1567 20.8367 11.165 19.355 9.905 18.095C8.645 16.835 7.16333 15.8433 5.46 15.12C3.75667 14.3733 1.93667 14 0 14C1.93667 14 3.75667 13.6383 5.46 12.915C7.16333 12.1683 8.645 11.165 9.905 9.905C11.165 8.645 12.1567 7.16333 12.88 5.46C13.6267 3.75667 14 1.93667 14 0C14 1.93667 14.3617 3.75667 15.085 5.46C15.8317 7.16333 16.835 8.645 18.095 9.905C19.355 11.165 20.8367 12.1683 22.54 12.915C24.2433 13.6383 26.0633 14 28 14C26.0633 14 24.2433 14.3733 22.54 15.12C20.8367 15.8433 19.355 16.835 18.095 18.095C16.835 19.355 15.8317 20.8367 15.085 22.54C14.3617 24.2433 14 26.0633 14 28Z" fill="url(#gemini-grad)"/>
        <defs>
          <linearGradient id="gemini-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4285f4"/>
            <stop offset="50%" stopColor="#9b72cb"/>
            <stop offset="100%" stopColor="#d96570"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function IconModelGrok() {
  return (
    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </div>
  )
}

function IconModelClaude() {
  return (
    <div className="w-7 h-7 rounded-full bg-[#cc785c] flex items-center justify-center">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
        <path d="M13.5 2.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v4.17L6.33 4.05a1.5 1.5 0 1 0-1.5 2.6L9 9l-4.17 2.33a1.5 1.5 0 1 0 1.5 2.6L10.5 11.5V15c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-3.5l4.17 2.43a1.5 1.5 0 1 0 1.5-2.6L15 9l4.17-2.35a1.5 1.5 0 1 0-1.5-2.6L13.5 6.67V2.5Z"/>
        <path d="M6 17.5a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 6 17.5ZM18 17.5a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 3 0v-1a1.5 1.5 0 0 0-1.5-1.5Z"/>
      </svg>
    </div>
  )
}

function IconModelDeepSeek() {
  return (
    <div className="w-7 h-7 rounded-full bg-[#4D6BFE] flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 48 48" fill="white">
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 8c2.67 0 5.12.78 7.18 2.12L12.12 31.18A11.93 11.93 0 0 1 12 28c0-6.63 5.37-12 12-12zm0 24c-2.67 0-5.12-.78-7.18-2.12l19.06-16.06c.07.69.12 1.38.12 2.08 0 6.63-5.37 12-12 12z"/>
      </svg>
    </div>
  )
}

const modelIconMap: Record<string, ReactNode> = {
  auto: <IconModelAuto />,
  misa: <IconModelMisa />,
  gpt: <IconModelGPT />,
  gemini: <IconModelGemini />,
  grok: <IconModelGrok />,
  claude: <IconModelClaude />,
  deepseek: <IconModelDeepSeek />,
}

const models = [
  { id: 'auto', name: 'Tự động', desc: 'Chế độ thông minh tự chọn mô hình', hasChildren: false },
  { id: 'misa', name: 'MISA AI', desc: '', hasChildren: true },
  { id: 'gpt', name: 'GPT', desc: '', hasChildren: true },
  { id: 'gemini', name: 'Gemini', desc: '', hasChildren: true },
  { id: 'grok', name: 'Grok', desc: '', hasChildren: true },
  { id: 'claude', name: 'Claude', desc: '', hasChildren: true },
  { id: 'deepseek', name: 'DeepSeek', desc: '', hasChildren: true },
]

function ModelSelector({ selected, onSelect }: { selected: string; onSelect: (id: string) => void }) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const current = models.find(m => m.id === selected) || models[0]
  const filtered = models.filter(m => m.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="text-xs px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center gap-1.5 transition-colors"
      >
        <span className="scale-75 origin-left">{modelIconMap[current.id]}</span>
        <span className="font-medium">{current.name}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute bottom-full mb-2 left-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 z-20 overflow-hidden">
            <div className="p-2 border-b border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                <IconSearch />
                <input
                  autoFocus
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Tìm kiếm mô hình..."
                  className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
            <div className="py-1 max-h-72 overflow-y-auto">
              {filtered.map(m => (
                <button
                  key={m.id}
                  onClick={() => { onSelect(m.id); setOpen(false) }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-stone-50 transition-colors text-left ${selected === m.id ? 'bg-stone-50' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    {modelIconMap[m.id]}
                    <div>
                      <p className="text-sm font-medium text-gray-900">{m.name}</p>
                      {m.desc && <p className="text-xs text-gray-400">{m.desc}</p>}
                    </div>
                  </div>
                  {m.hasChildren && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// ─── Page: Chat ─────────────────────────────────────────────────────────────

function ChatPage({ setShowPromptLib, conversationId, onNewConversation }: {
  setShowPromptLib: (v: boolean) => void
  conversationId: string
  onNewConversation: () => void
}) {
  const [input, setInput] = useState('')
  const [selectedModel, setSelectedModel] = useState('auto')
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const history = loadChatHistory()
    return history.find(item => item.id === conversationId)?.messages ?? []
  })
  const [isReplying, setIsReplying] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const replyTimerRef = useRef<number | null>(null)

  const chips = [
    { icon: '🖼️', label: 'Tạo hình ảnh' },
    { icon: '🎬', label: 'Tạo video' },
    { icon: '📊', label: 'Tạo infographic' },
    { icon: '📑', label: 'Tạo slide' },
    { icon: '🎵', label: 'Tạo nhạc' },
    { icon: '🔊', label: 'Tạo audio' },
    { icon: '🎙️', label: 'Tạo giọng cá nhân', new: true },
    { icon: '📈', label: 'Tạo biểu đồ' },
    { icon: '📓', label: 'Notebook', new: true },
    { icon: '📋', label: 'Ghi chép cuộc họp', new: true },
    { icon: '🧠', label: 'Tạo mindmap' },
    { icon: '▶️', label: 'Tóm tắt YouTube' },
  ]

  const suggestions = [
    { title: 'Sử dụng giọng đọc mới, chân thực và tự nhiên hơn', emoji: '👩' },
    { title: 'Ghi chép cuộc họp tiện lợi, mọi lúc mọi nơi', emoji: '👥' },
    { title: 'Nghiên cứu tài liệu thông minh cùng Notebook', emoji: '📚' },
  ]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })

    if (messages.length === 0) return

    const now = new Date().toISOString()
    const oldHistory = loadChatHistory()
    const oldConversation = oldHistory.find(item => item.id === conversationId)
    const firstQuestion = messages.find(message => message.role === 'user')?.content
    const conversation: ChatConversation = {
      id: conversationId,
      title: oldConversation?.title ?? firstQuestion?.slice(0, 50) ?? 'Cuộc trò chuyện mới',
      createdAt: oldConversation?.createdAt ?? now,
      updatedAt: now,
      messages,
    }

    localStorage.setItem(
      CHAT_HISTORY_KEY,
      JSON.stringify([
        conversation,
        ...oldHistory.filter(item => item.id !== conversationId),
      ]),
    )
  }, [conversationId, messages])

  useEffect(() => {
    return () => {
      if (replyTimerRef.current !== null) {
        window.clearTimeout(replyTimerRef.current)
      }
    }
  }, [])

  const handleSend = () => {
    const question = input.trim()
    if (!question || isReplying) return

    const userMessage: ChatMessage = {
      id: createId(),
      role: 'user',
      content: question,
      createdAt: new Date().toISOString(),
      model: selectedModel,
    }

    setMessages(current => [...current, userMessage])
    setInput('')
    setIsReplying(true)

    replyTimerRef.current = window.setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: createId(),
        role: 'assistant',
        content: getDemoReply(question),
        createdAt: new Date().toISOString(),
        model: selectedModel,
      }

      setMessages(current => [...current, assistantMessage])
      setIsReplying(false)
      replyTimerRef.current = null
    }, 600)
  }

  const composer = (
    <div className="relative border-2 border-stone-300 rounded-2xl bg-white shadow-sm focus-within:border-stone-500 transition-colors">
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
          }
        }}
        placeholder="Hỏi tôi bất cứ điều gì"
        className="w-full px-4 pt-4 pb-14 text-sm text-gray-800 placeholder-gray-400 resize-none outline-none bg-transparent rounded-2xl min-h-[80px]"
        rows={2}
      />
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button type="button" className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors" aria-label="Đính kèm tệp"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg></button>
          <button type="button" className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors" aria-label="Mở công cụ"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><rect x="7" y="7" width="3" height="9"/><rect x="14" y="7" width="3" height="5"/></svg></button>
          <button
            type="button"
            onClick={() => setShowPromptLib(true)}
            className="text-gray-400 hover:text-stone-700 p-1 rounded transition-colors text-xs flex items-center gap-1"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            <span>Câu lệnh mẫu</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <ModelSelector selected={selectedModel} onSelect={setSelectedModel} />
          <button type="button" className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors" aria-label="Nhập bằng giọng nói"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg></button>
          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim() || isReplying}
            aria-label="Gửi tin nhắn"
            className="w-8 h-8 rounded-full bg-stone-700 hover:bg-stone-800 disabled:bg-gray-200 text-white flex items-center justify-center transition-colors"
          >
            <IconSend />
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white">
      {messages.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 overflow-y-auto">
          <div className="w-full max-w-2xl">
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Chào Thành Danh 👋
            </h1>

            <div className="mb-4">{composer}</div>

            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {chips.map(chip => (
                <button
                  type="button"
                  key={chip.label}
                  onClick={() => setInput(chip.label)}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-stone-200 hover:text-stone-800 hover:bg-stone-50 transition-all"
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                  {chip.new && <Badge label="Mới" />}
                </button>
              ))}
            </div>

            <div className="relative">
              <div className="flex gap-3 overflow-hidden">
                {suggestions.map((suggestion, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setInput(suggestion.title)}
                    className="flex-1 min-w-0 text-left bg-gradient-to-br from-amber-50 to-stone-50 border border-stone-100 rounded-xl p-4 hover:border-stone-200 transition-all group"
                  >
                    <p className="text-sm font-medium text-gray-700 mb-1 group-hover:text-stone-800">{suggestion.title}</p>
                    <p className="text-xs text-stone-700 flex items-center gap-1 mt-2">Thử ngay <IconArrowRight /></p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="border-b border-gray-100 bg-white px-6 py-3">
            <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-800">Cuộc trò chuyện</p>
                <p className="text-xs text-gray-400">Tin nhắn được lưu tự động vào Lịch sử</p>
              </div>
              <button
                type="button"
                onClick={onNewConversation}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-700 hover:bg-stone-800 text-white text-xs font-medium transition-colors"
              >
                <IconPlus />
                Cuộc trò chuyện mới
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="w-full max-w-3xl mx-auto space-y-5">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 whitespace-pre-wrap ${
                      message.role === 'user'
                        ? 'bg-stone-700 text-white rounded-br-md'
                        : 'bg-gray-100 text-gray-800 rounded-bl-md'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isReplying && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-500 rounded-2xl rounded-bl-md px-4 py-3 text-sm">
                    DANAI đang trả lời...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-gray-100 bg-white px-6 py-4">
            <div className="w-full max-w-3xl mx-auto">{composer}</div>
            <p className="text-[11px] text-gray-400 text-center mt-2">
              Chế độ demo — Enter để gửi, Shift + Enter để xuống dòng
            </p>
          </div>
        </>
      )}
    </div>
  )
}

// ─── Page: AI Studio ─────────────────────────────────────────────────────────

const studioTools = [
  {
    category: 'Hình ảnh',
    icon: '🖼️',
    items: [
      { name: 'Tạo hình ảnh', desc: 'Hiện thực hóa hình ảnh sáng tạo của bạn bằng AI', gradient: 'from-purple-400 to-pink-400', emoji: '🎨' },
      { name: 'Chỉnh sửa hình ảnh', desc: 'Xóa nền, nâng chất lượng, chỉnh sửa vùng ảnh với AI', gradient: 'from-blue-400 to-cyan-400', emoji: '✏️' },
      { name: 'Tạo infographic', desc: 'Trực quan hóa thông tin và dữ liệu bằng AI', gradient: 'from-amber-600 to-amber-400', emoji: '📊' },
      { name: 'Tạo biểu đồ', desc: 'Biến dữ liệu thành biểu đồ trực quan với AI', gradient: 'from-green-400 to-teal-400', emoji: '📈' },
    ]
  },
  {
    category: 'Video',
    icon: '🎬',
    items: [
      { name: 'Tạo video', desc: 'Biến ý tưởng của bạn thành video sống động', gradient: 'from-violet-400 to-purple-400', emoji: '🎬' },
      { name: 'Tóm tắt YouTube', desc: 'Nắm bắt nội dung của video YouTube trong vài giây', gradient: 'from-red-400 to-pink-400', emoji: '▶️' },
    ]
  },
  {
    category: 'Âm thanh',
    icon: '🎵',
    items: [
      { name: 'Tạo nhạc', desc: 'Tạo ra bản nhạc bạn yêu thích bằng AI', gradient: 'from-pink-400 to-rose-400', emoji: '🎵' },
      { name: 'Chuyển giọng nói thành văn bản', desc: 'Chuyển file ghi âm thành nội dung văn bản', gradient: 'from-sky-400 to-blue-400', emoji: '🎙️' },
      { name: 'Tạo giọng cá nhân', desc: 'Tạo giọng đọc chân thực và tự nhiên của riêng bạn', gradient: 'from-amber-500 to-stone-400', emoji: '🔊', new: true },
    ]
  },
  {
    category: 'Nội dung',
    icon: '📄',
    items: [
      { name: 'Tạo slide', desc: 'Tự động tạo bài thuyết trình chuyên nghiệp với AI', gradient: 'from-indigo-400 to-blue-400', emoji: '📑' },
      { name: 'Tạo mindmap', desc: 'Trực quan hóa ý tưởng và kế hoạch bằng sơ đồ tư duy', gradient: 'from-teal-400 to-green-400', emoji: '🧠' },
      { name: 'Dịch văn bản', desc: 'Dịch chính xác nội dung sang nhiều ngôn ngữ khác nhau', gradient: 'from-cyan-400 to-sky-400', emoji: '🌐' },
    ]
  },
]

function StudioPage({ setPage }: { setPage: (p: Page) => void }) {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState('Tất cả')
  const tabs = ['Tất cả', 'Hình ảnh', 'Video', 'Âm thanh', 'Nội dung']

  const filtered = studioTools.filter(group =>
    activeTab === 'Tất cả' || group.category === activeTab
  )

  return (
    <div className="flex-1 overflow-y-auto px-8 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Chào mừng đến với <span className="text-stone-700">AI Studio</span> <span className="text-yellow-400">✦</span>
      </h1>

      {/* Search + tabs */}
      <div className="flex items-center gap-4 mt-4 mb-6">
        <div className="relative">
          <IconSearch />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Tìm kiếm"
            className="pl-8 pr-4 py-2 text-sm border-2 border-stone-200 rounded-lg outline-none focus:border-stone-500 w-52"
            style={{ paddingLeft: '2.2rem' }}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <IconSearch />
          </span>
        </div>
        <div className="flex gap-1">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-4 py-1.5 text-sm rounded-full transition-all ${
                activeTab === t
                  ? 'text-stone-800 font-semibold border-b-2 border-stone-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Tool groups */}
      <div className="space-y-8">
        {filtered.map(group => (
          <div key={group.category}>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              {group.icon} {group.category}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {group.items
                .filter(item => !search || item.name.toLowerCase().includes(search.toLowerCase()))
                .map(item => (
                  <div
                    key={item.name}
                    onClick={() => {
                      if (item.name === 'Tạo biểu đồ') setPage('studio-chart')
                      else if (item.name === 'Tạo infographic') setPage('studio-infographic')
                      else if (item.name === 'Tạo slide') setPage('studio-slide')
                    }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-stone-200 hover:shadow-sm cursor-pointer transition-all group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}>
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-semibold text-gray-900 text-sm">{item.name}</span>
                        {'new' in item && item.new && <Badge label="Mới" />}
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2">{item.desc}</p>
                      <span className="text-xs text-stone-700 mt-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Thử ngay <IconArrowRight />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Page: Notebook Mode Select ──────────────────────────────────────────────

function NotebookPage({ setPage }: { setPage: (p: Page) => void }) {
  const [selected, setSelected] = useState<'data' | 'doc' | null>(null)

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
      <h2 className="text-xl font-bold text-gray-800 mb-8 text-center">
        Nghiên cứu và hệ thống hóa thông tin từ{' '}
        <span className="text-stone-700">đa nguồn tài liệu</span>
      </h2>
      <div className="flex gap-6">
        <div
          onClick={() => setSelected('data')}
          className={`w-64 p-6 rounded-2xl border-2 cursor-pointer transition-all text-center ${
            selected === 'data'
              ? 'border-stone-500 bg-stone-50 shadow-md'
              : 'border-dashed border-gray-300 bg-white hover:border-stone-200 hover:bg-stone-50'
          }`}
        >
          <div className="flex justify-center mb-4">
            <IconBarChart />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Phân tích dữ liệu</h3>
          <p className="text-sm text-gray-500">Phù hợp với các tác vụ tính toán, thống kê và phân tích xu hướng từ các tập dữ liệu.</p>
        </div>
        <div
          onClick={() => setSelected('doc')}
          className={`w-64 p-6 rounded-2xl border-2 cursor-pointer transition-all text-center ${
            selected === 'doc'
              ? 'border-stone-500 bg-stone-50 shadow-md'
              : 'border-2 border-gray-200 bg-white hover:border-stone-200 hover:bg-stone-50'
          }`}
        >
          <div className="flex justify-center mb-4">
            <IconDoc />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Nghiên cứu tài liệu</h3>
          <p className="text-sm text-gray-500">Phù hợp với các tác vụ đọc hiểu, trích xuất và nghiên cứu chuyên sâu từ các tệp tài liệu</p>
        </div>
      </div>
      {selected && (
        <button
          onClick={() => setPage('notebook-workspace')}
          className="mt-8 px-8 py-2.5 bg-stone-700 hover:bg-stone-800 text-white font-medium rounded-xl transition-colors"
        >
          Tiếp tục →
        </button>
      )}
    </div>
  )
}

// ─── Page: Notebook Workspace ────────────────────────────────────────────────

function NotebookWorkspace({ setPage }: { setPage: (p: Page) => void }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
  try {
    const saved = localStorage.getItem('danai-chat-messages')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
})

const [isReplying, setIsReplying] = useState(false)
const bottomRef = useRef<HTMLDivElement | null>(null)

useEffect(() => {
  localStorage.setItem(
    'danai-chat-messages',
    JSON.stringify(messages)
  )
}, [messages])

useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
}, [messages.length, isReplying])
  const outputs = [
    { name: 'Mindmap', icon: '🗺️', soon: true },
    { name: 'Infographic', icon: '📊', soon: true },
    { name: 'Báo cáo', icon: '📄', soon: true },
    { name: 'Biểu đồ', icon: '📈', soon: true },
  ]

  return (
    <div className="flex-1 flex min-h-0 overflow-hidden">
      {/* Left: Sources panel */}
      <div className="w-56 flex-shrink-0 border-r border-gray-100 flex flex-col bg-white">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="text-sm font-semibold text-gray-700">Nguồn tài liệu</span>
          <button className="text-gray-400 hover:text-gray-600"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg></button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <div className="text-4xl mb-3">📄</div>
          <p className="text-sm text-gray-400">Nguồn tài liệu sẽ hiển thị tại đây</p>
        </div>
        <div className="p-3 border-t border-gray-100">
          <button className="w-full flex items-center justify-center gap-2 text-sm text-stone-800 border border-stone-300 rounded-lg py-2 hover:bg-stone-50 transition-colors">
            <IconPlus /> Thêm tài liệu
          </button>
        </div>
      </div>

      {/* Center: Chat */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 text-sm text-gray-500">
          <button onClick={() => setPage('notebook')} className="hover:text-stone-800 transition-colors">Notebook</button>
          <span>/</span>
          <span>Phân tích dữ liệu</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">Số dữ liệu mới</span>
          <button className="text-gray-400 hover:text-gray-600 ml-1">✏️</button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="text-center mb-6">
            <div className="text-3xl mb-2">👋</div>
            <h2 className="text-xl font-bold text-gray-900">Chào Thành Danh</h2>
          </div>
          <div className="flex gap-2 flex-wrap justify-center mb-4">
            {['Lọc trùng', 'Trích xuất', 'Đổi chiều', 'Phân tích & tạo báo cáo', 'Tạo công thức excel'].map(a => (
              <button key={a} className="text-xs px-3 py-1.5 border border-gray-200 rounded-full text-gray-600 hover:border-stone-300 hover:text-stone-800 transition-colors flex items-center gap-1">
                {a === 'Lọc trùng' && '🔽'}
                {a === 'Trích xuất' && '📤'}
                {a === 'Đổi chiều' && '↔️'}
                {a === 'Phân tích & tạo báo cáo' && '📋'}
                {a === 'Tạo công thức excel' && '📗'}
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-100">
          <div className="border border-gray-200 rounded-xl p-3 bg-white">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Hỏi tôi bất cứ điều gì"
              className="w-full text-sm text-gray-800 placeholder-gray-400 resize-none outline-none min-h-[40px]"
              rows={2}
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-400">Đang dùng 0 nguồn</span>
              <div className="flex items-center gap-2">
                <button className="text-xs px-2 py-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center gap-1">
                  <span>🤖</span> GPT 5.4 ▾
                </button>
                <button className="text-gray-400 hover:text-gray-600"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg></button>
                <button disabled={!input.trim()} className="w-7 h-7 rounded-full bg-stone-700 hover:bg-stone-800 disabled:bg-gray-200 text-white flex items-center justify-center transition-colors">
                  <IconSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Output panel */}
      <div className="w-56 flex-shrink-0 border-l border-gray-100 flex flex-col bg-white">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="text-sm font-semibold text-gray-700">Sản phẩm đầu ra</span>
          <button className="text-gray-400 hover:text-gray-600"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="15" y1="3" x2="15" y2="21"/></svg></button>
        </div>
        <div className="p-3 grid grid-cols-2 gap-2">
          {outputs.map(out => (
            <div key={out.name} className="border border-gray-100 rounded-xl p-3 text-center hover:border-stone-200 cursor-pointer transition-all">
              <div className="text-xl mb-1">{out.icon}</div>
              <p className="text-xs font-medium text-gray-700">{out.name}</p>
              {out.soon && (
                <span className="text-[10px] text-stone-700 bg-stone-50 px-1.5 rounded-full">Sắp ra mắt</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <div className="text-3xl mb-2">📄</div>
          <p className="text-xs text-gray-400">Sản phẩm đầu ra sẽ được tạo tại đây</p>
        </div>
      </div>
    </div>
  )
}

// ─── Page: Trợ lý AI ─────────────────────────────────────────────────────────

function AssistantPage() {
  const [tab, setTab] = useState('Tất cả')
  const tabs = ['Tất cả', 'Trợ lý của tôi', 'Được chia sẻ với tôi']

  return (
    <div className="flex-1 flex flex-col px-8 py-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Trợ lý AI</h1>
          <p className="text-sm text-gray-500 mt-0.5">Huấn luyện trợ lý AI với chỉ dẫn, tri thức và kỹ năng tùy chỉnh</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 text-sm px-4 py-2 border border-stone-500 text-stone-800 rounded-lg hover:bg-stone-50 transition-colors">
            Khám phá trợ lý mẫu <Badge label="Mới" />
          </button>
          <button className="flex items-center gap-1.5 text-sm px-4 py-2 bg-stone-700 hover:bg-stone-800 text-white rounded-lg transition-colors">
            <IconPlus /> Tạo Trợ lý AI
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mt-4 mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
        <input
          placeholder="Tìm kiếm trợ lý..."
          className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-stone-300 focus:border-stone-600 rounded-xl outline-none"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-gray-200 mb-6">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-all ${
              tab === t ? 'border-stone-600 text-stone-800' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Empty state */}
      <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-4xl mb-4">
          🤖
        </div>
        <p className="text-gray-500 mb-4 max-w-xs">Huấn luyện trợ lý AI chuyên sâu cho từng nhiệm vụ từ chỉ hướng dẫn và tài liệu của bạn</p>
        <div className="flex gap-3">
          <button className="flex items-center gap-1.5 text-sm px-4 py-2 border border-stone-500 text-stone-800 rounded-lg hover:bg-stone-50 transition-colors">
            Khám phá trợ lý mẫu <Badge label="Mới" />
          </button>
          <button className="flex items-center gap-1.5 text-sm px-4 py-2 bg-stone-700 hover:bg-stone-800 text-white rounded-lg transition-colors">
            <IconPlus /> Tạo mới
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Prompt Library Drawer ────────────────────────────────────────────────────

const promptItems = [
  { title: 'Soạn văn bản quy phạm', desc: 'Là chuyên viên pháp chế, hãy soạn dự thảo văn bản quy phạm pháp luật về [chủ đề/nội dung/v...' },
  { title: 'Phân tích đối thủ cạnh tranh', desc: 'Là một chuyên gia phân tích thị trường, hãy lập một báo cáo chi tiết so sánh ba đối thủ cạnh tra...' },
  { title: 'Nghiên cứu thị trường lao động', desc: 'Là chuyên viên nhân sự, hãy phân tích chi tiết thị trường lao động cho [ngành/khu vực/vị trí c...' },
  { title: 'Phân tích báo cáo tài chính', desc: 'Là chuyên viên tài chính, hãy phân tích báo cáo tài chính [đính kèm file báo cáo], tập trung vào...' },
  { title: 'Viết code theo yêu cầu', desc: 'Là một lập trình viên chuyên nghiệp, hãy viết đoạn mã (code) cho [chức năng/module cụ thể] b...' },
  { title: 'Soạn giáo án môn học', desc: 'Là giáo viên, hãy soạn một giáo án chi tiết cho bài học [tên bài/môn học], đảm bảo bao gồm c...' },
  { title: 'Nghiên cứu chân dung khách hàng', desc: 'Bạn là chuyên gia nghiên cứu thị trường, hãy xây dựng chân dung khách hàng mục tiêu chi tiết...' },
  { title: 'Xây dựng chân dung khách hàng', desc: 'Là một chuyên gia nghiên cứu khách hàng, hãy xây dựng một hồ sơ chân dung khách hàng (Cu...' },
  { title: 'Soạn thông báo hành chính', desc: 'Là cán bộ văn phòng, hãy soạn một thông báo chính thức gửi đến các cơ quan, đơn vị liên quan...' },
]

const promptCategories = ['Tất cả', 'Marketing', 'Kinh doanh', 'Tài chính', 'Nhân sự', 'Hành chính công', 'Công nghệ thông tin', 'Giáo dục']

function PromptLibrary({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('Tạo bởi OneAI')
  const [activeCat, setActiveCat] = useState('Tất cả')
  const tabs = ['Yêu thích', 'Tạo bởi OneAI', 'Tạo bởi tôi']

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="flex-1 bg-black/20" onClick={onClose} />
      {/* Drawer */}
      <div className="w-[700px] bg-white shadow-2xl flex flex-col h-full">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Thư viện câu lệnh mẫu</h2>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 text-sm px-4 py-2 bg-stone-700 hover:bg-stone-800 text-white rounded-lg transition-colors">
              <IconPlus /> Tạo mẫu câu lệnh
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <IconX />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-6 pt-4">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                activeTab === t
                  ? 'border-stone-500 text-stone-800 bg-stone-50 font-medium'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex flex-1 min-h-0 mt-4">
          {/* Categories */}
          <div className="w-44 flex-shrink-0 border-r border-gray-100 px-3 py-2 space-y-0.5">
            {promptCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-all ${
                  activeCat === cat
                    ? 'text-stone-800 font-semibold border-l-2 border-stone-600 bg-stone-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Prompt list */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Search */}
            <div className="px-4 pb-3">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
                <input
                  placeholder="Tìm kiếm mẫu câu lệnh"
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-stone-300"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 space-y-1.5 pb-4">
              {promptItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-stone-200 hover:bg-stone-50 cursor-pointer transition-all group"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-500 truncate">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-gray-400 hover:text-yellow-500 transition-colors"><IconStar /></button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors"><IconInfo /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Page: Ghi chép cuộc họp ─────────────────────────────────────────────────

function MeetingPage() {
  const [tab, setTab] = useState<'record' | 'upload'>('record')
  const [mode, setMode] = useState<'live' | 'browser'>('live')
  const [recording, setRecording] = useState(false)
  const [seconds, setSeconds] = useState(0)

  const handleStart = () => {
    setRecording(true)
    const iv = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(iv)
  }

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      {/* Top tab + history */}
      <div className="flex items-center justify-between px-8 pt-5 pb-0 border-b border-gray-100">
        <div className="flex gap-1">
          {([['record', 'Ghi âm'], ['upload', 'Tải tài liệu']] as const).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-6 py-2.5 text-sm font-medium rounded-t-lg border transition-all ${
                tab === id
                  ? 'bg-white border-gray-200 border-b-white text-gray-900 -mb-px z-10'
                  : 'bg-gray-50 border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-1">
          <IconHistory /> Lịch sử
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        {tab === 'record' ? (
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Ghi chép cuộc họp</h1>
            <p className="text-sm text-gray-500 text-center mb-1">Ghi chép, tóm tắt và tạo biên bản họp thông minh cho mọi cuộc họp của bạn</p>
            <p className="text-sm text-gray-400 mb-8">Thời lượng tối đa 3 tiếng</p>

            {/* Mode cards */}
            <div className="flex gap-4 mb-8 w-full max-w-xl">
              <button
                onClick={() => setMode('live')}
                className={`flex-1 p-5 rounded-2xl border-2 text-left transition-all ${
                  mode === 'live'
                    ? 'border-stone-600 bg-stone-50 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className={`text-xl mb-2 ${mode === 'live' ? 'text-stone-700' : 'text-gray-400'}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="8" y2="18"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="16" y1="6" x2="16" y2="18"/>
                  </svg>
                </div>
                <p className={`font-semibold text-sm mb-1 ${mode === 'live' ? 'text-stone-700' : 'text-gray-700'}`}>Ghi âm trực tiếp</p>
                <p className="text-xs text-gray-400">Ghi lại âm thanh từ micro của bạn ngay lập tức</p>
              </button>
              <button
                onClick={() => setMode('browser')}
                className={`flex-1 p-5 rounded-2xl border-2 text-left transition-all ${
                  mode === 'browser'
                    ? 'border-stone-600 bg-stone-50 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="text-gray-400 mb-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <p className="font-semibold text-sm text-gray-700 mb-1">Ghi âm tab trình duyệt</p>
                <p className="text-xs text-gray-400">Ghi lại âm thanh từ bất kỳ tab trình duyệt nào</p>
              </button>
            </div>

            {/* Start / recording button */}
            {!recording ? (
              <button
                onClick={handleStart}
                className="flex items-center gap-2 px-8 py-3 bg-stone-700 hover:bg-stone-800 text-white rounded-full font-medium text-sm transition-colors shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                Bắt đầu ghi âm
              </button>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3 px-6 py-3 bg-red-50 border border-red-200 rounded-full">
                  <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-red-600 font-mono font-semibold text-sm">{fmt(seconds)}</span>
                  <span className="text-red-500 text-sm">Đang ghi âm...</span>
                </div>
                <button
                  onClick={() => { setRecording(false); setSeconds(0) }}
                  className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
                >
                  Dừng ghi âm
                </button>
              </div>
            )}

            <p className="text-xs text-gray-400 mt-6">
              Chi phí: <span className="font-semibold text-gray-600">0.2</span>
              <svg className="inline mx-1" width="12" height="12" viewBox="0 0 24 24" fill="#92400e"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              / phút
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 w-full max-w-md">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-3xl">📄</div>
            <h2 className="text-lg font-bold text-gray-800">Tải tài liệu cuộc họp</h2>
            <p className="text-sm text-gray-500 text-center">Hỗ trợ file âm thanh (.mp3, .m4a, .wav) hoặc video (.mp4, .mov)</p>
            <div className="w-full border-2 border-dashed border-stone-300 rounded-2xl p-10 flex flex-col items-center gap-3 cursor-pointer hover:border-stone-400 hover:bg-stone-50 transition-all">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="1.5"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
              <p className="text-sm font-medium text-stone-700">Kéo thả hoặc chọn file</p>
              <p className="text-xs text-gray-400">Tối đa 500MB</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Page: Dự án ─────────────────────────────────────────────────────────────

function ProjectPage() {
  const [tab, setTab] = useState('Tất cả')
  const [search, setSearch] = useState('')
  const tabs = ['Tất cả', 'Dự án của tôi']

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dự án</h1>
          <p className="text-sm text-gray-500 mt-0.5">Tạo không gian làm việc riêng biệt cho từng mục tiêu</p>
        </div>
        <button className="flex items-center gap-1.5 text-sm px-4 py-2 bg-stone-700 hover:bg-stone-800 text-white rounded-lg transition-colors font-medium">
          <IconPlus /> Tạo dự án
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Tìm kiếm dự án..."
          className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-stone-200 focus:border-stone-500 rounded-xl outline-none"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-gray-200 mb-6">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-all ${
              tab === t ? 'border-stone-600 text-stone-800' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Empty state */}
      <div className="flex-1 bg-gray-50 rounded-2xl flex flex-col items-center justify-center py-20 text-center">
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <span className="absolute -top-1 -right-1 text-base">✦</span>
        </div>
        <p className="text-sm text-gray-500 max-w-xs mb-4">
          Tạo không gian lưu trữ cho từng mục tiêu giúp sắp xếp gọn gàng và kế thừa nội dung xuyên suốt
        </p>
        <button className="flex items-center gap-1.5 text-sm text-stone-700 font-medium hover:text-stone-900 transition-colors">
          <IconPlus /> Tạo dự án
        </button>
      </div>
    </div>
  )
}

// ─── Page: Công cụ ────────────────────────────────────────────────────────────

const toolCategories = [
  'Tất cả', 'Kinh doanh', 'Marketing', 'Tài chính', 'Nhân sự',
  'Văn phòng', 'Chiến lược', 'CNTT', 'Y tế', 'Giáo dục', 'Hành chính công'
]

const toolsByCategory: Record<string, { name: string; desc: string; icon: string }[]> = {
  'Kinh doanh': [
    { name: 'Giải thích công thức Excel', desc: 'Giải thích chi tiết thành phần, ý nghĩa, cách sử dụng của công thức excel bất kỳ', icon: '📊' },
    { name: 'Lập kế hoạch kinh doanh', desc: 'Hỗ trợ lập kế hoạch giúp định hướng chiến lược kinh doanh đạt kết quả tối ưu', icon: '📋' },
    { name: 'Nghiên cứu chân dung khách hàng', desc: 'Hỗ trợ xác định đặc điểm, nhu cầu và hành vi khách hàng.', icon: '👤' },
    { name: 'Phân tích dữ liệu khảo sát, review, feedback khách hàng', desc: 'Tổng hợp và phân tích phản hồi để rút ra xu hướng, vấn đề, cơ hội cải thiện.', icon: '📈' },
    { name: 'Soạn email bán hàng', desc: 'Hỗ trợ soạn thảo email để giới thiệu sản phẩm/dịch vụ hoặc thúc đẩy mua hàng, chốt đơn', icon: '✉️' },
    { name: 'Soạn email báo cáo', desc: 'Hỗ trợ soạn thảo email báo cáo cô đọng, chuyên nghiệp, giúp người nhận nhanh chóng nắm bắt...', icon: '📧' },
    { name: 'Soạn email chăm sóc khách hàng', desc: 'Hỗ trợ soạn thảo email chăm sóc khách hàng thể hiện sự quan tâm chân thành, giúp duy trì mối...', icon: '💌' },
    { name: 'Soạn email giao việc', desc: 'Hỗ trợ soạn thảo email giao việc rõ ràng, cụ thể giúp người nhận dễ nắm bắt thông tin.', icon: '📩' },
    { name: 'Soạn email Marketing', desc: 'Hỗ trợ soạn thảo email gửi khách hàng để phục vụ kinh doanh, marketing', icon: '📣' },
    { name: 'Soạn email mời hợp tác', desc: 'Hỗ trợ soạn thảo email gửi đối tác để giới thiệu sản phẩm/dịch vụ và mời hợp tác', icon: '🤝' },
    { name: 'Sửa công thức Excel', desc: 'Hỗ trợ phân tích lỗi và chỉnh sửa công thức excel', icon: '🔧' },
    { name: 'Tạo câu hỏi khảo sát độ hài lòng', desc: 'Gợi ý các câu hỏi để khảo sát độ hài lòng của khách hàng', icon: '❓' },
    { name: 'Tạo câu hỏi thảo luận', desc: 'Gợi ý câu hỏi thảo luận cho cuộc họp, workshop, seminar,...', icon: '💬' },
    { name: 'Tạo công thức Excel', desc: 'Hỗ trợ tạo các công thức Excel theo nhu cầu', icon: '📗' },
    { name: 'Tạo khảo sát thị trường', desc: 'Hỗ trợ thiết kế bảng câu hỏi chuyên nghiệp, thu thập dữ liệu thị trường hiệu quả để ra quyết đị...', icon: '🔍' },
    { name: 'Tạo ý tưởng kinh doanh', desc: 'Đề xuất ý tưởng kinh doanh sáng tạo và khả thi phù hợp với sở thích và điều kiện thị trường', icon: '💡' },
    { name: 'Tạo ý tưởng thiết kế đồ họa', desc: 'Hỗ trợ khởi tạo các ý tưởng thiết kế giúp truyền đạt thông điệp trực quan hơn như logo, ấn phẩ...', icon: '🎨' },
    { name: 'Tạo ý tưởng thiết kế kiến trúc', desc: 'Hỗ trợ lên ý tưởng thiết kế kiến trúc sáng tạo, trực quan và phù hợp với không gian, công năn...', icon: '🏛️' },
    { name: 'Tạo ý tưởng thiết kế UI', desc: 'Hỗ trợ lên ý tưởng cho giao diện như gợi ý bố cục, màu sắc... để trực quan và phù hợp với trải...', icon: '🖥️' },
    { name: 'Tối ưu nội dung SEO', desc: 'Tối ưu nội dung SEO để nâng cao thứ hạng tìm kiếm và thu hút đúng đối tượng.', icon: '🔎' },
    { name: 'Tối ưu Prompt', desc: 'Viết lại prompt hiện tại của bạn theo cách tối ưu để nhận phản hồi chất lượng từ AI', icon: '⚡' },
  ],
  'Marketing': [
    { name: 'Viết content Facebook', desc: 'Tạo nội dung hấp dẫn cho trang Facebook doanh nghiệp', icon: '📘' },
    { name: 'Viết caption Instagram', desc: 'Tạo caption sáng tạo và thu hút cho bài đăng Instagram', icon: '📷' },
    { name: 'Lên kế hoạch content', desc: 'Lập kế hoạch nội dung marketing theo chiến lược', icon: '📅' },
    { name: 'Phân tích đối thủ cạnh tranh', desc: 'So sánh và phân tích điểm mạnh yếu của đối thủ', icon: '⚔️' },
    { name: 'Viết kịch bản video', desc: 'Tạo kịch bản cho video marketing, TikTok, YouTube', icon: '🎬' },
  ],
  'Tài chính': [
    { name: 'Phân tích báo cáo tài chính', desc: 'Phân tích chuyên sâu báo cáo tài chính doanh nghiệp', icon: '💰' },
    { name: 'Lập ngân sách', desc: 'Hỗ trợ lập kế hoạch ngân sách chi tiết', icon: '📊' },
    { name: 'Dự báo dòng tiền', desc: 'Phân tích và dự báo dòng tiền trong ngắn và dài hạn', icon: '📈' },
    { name: 'Tính toán ROI', desc: 'Tính toán và phân tích lợi tức đầu tư', icon: '🔢' },
  ],
  'Nhân sự': [
    { name: 'Soạn JD tuyển dụng', desc: 'Viết mô tả công việc chuyên nghiệp, thu hút ứng viên phù hợp', icon: '📝' },
    { name: 'Câu hỏi phỏng vấn', desc: 'Tạo bộ câu hỏi phỏng vấn theo vị trí và yêu cầu', icon: '❓' },
    { name: 'Nghiên cứu thị trường lao động', desc: 'Phân tích thị trường lao động và xu hướng tuyển dụng', icon: '🔍' },
    { name: 'Đánh giá hiệu suất', desc: 'Hỗ trợ xây dựng KPI và đánh giá nhân viên', icon: '⭐' },
  ],
  'Văn phòng': [
    { name: 'Soạn thảo văn bản', desc: 'Hỗ trợ soạn thảo các loại văn bản hành chính, công văn', icon: '📄' },
    { name: 'Tóm tắt tài liệu', desc: 'Tóm tắt nhanh nội dung chính của tài liệu dài', icon: '📋' },
    { name: 'Lên lịch họp', desc: 'Hỗ trợ lập agenda và kế hoạch họp hiệu quả', icon: '📅' },
  ],
  'Chiến lược': [
    { name: 'Phân tích SWOT', desc: 'Phân tích điểm mạnh, yếu, cơ hội, thách thức cho doanh nghiệp', icon: '⚖️' },
    { name: 'Lập chiến lược phát triển', desc: 'Xây dựng lộ trình và chiến lược phát triển dài hạn', icon: '🗺️' },
    { name: 'Phân tích thị trường', desc: 'Nghiên cứu và phân tích xu hướng thị trường', icon: '📊' },
  ],
  'CNTT': [
    { name: 'Viết code theo yêu cầu', desc: 'Viết đoạn mã cho chức năng hoặc module cụ thể theo yêu cầu', icon: '💻' },
    { name: 'Review code', desc: 'Kiểm tra và đề xuất cải tiến cho đoạn code', icon: '🔍' },
    { name: 'Debug lỗi', desc: 'Phân tích và sửa lỗi trong code', icon: '🐛' },
    { name: 'Viết tài liệu kỹ thuật', desc: 'Soạn thảo tài liệu API, hướng dẫn sử dụng kỹ thuật', icon: '📚' },
  ],
  'Y tế': [
    { name: 'Tóm tắt hồ sơ bệnh án', desc: 'Tóm tắt thông tin quan trọng từ hồ sơ bệnh án', icon: '🏥' },
    { name: 'Tra cứu thông tin thuốc', desc: 'Cung cấp thông tin về thuốc, liều dùng và tác dụng phụ', icon: '💊' },
  ],
  'Giáo dục': [
    { name: 'Soạn giáo án môn học', desc: 'Soạn giáo án chi tiết cho bài học theo chương trình', icon: '📚' },
    { name: 'Tạo bài kiểm tra', desc: 'Tạo bộ câu hỏi và bài kiểm tra theo chủ đề', icon: '✏️' },
    { name: 'Giải thích khái niệm', desc: 'Giải thích đơn giản, dễ hiểu các khái niệm học thuật', icon: '💡' },
  ],
  'Hành chính công': [
    { name: 'Soạn văn bản quy phạm', desc: 'Soạn dự thảo văn bản quy phạm pháp luật theo yêu cầu', icon: '📜' },
    { name: 'Soạn thông báo hành chính', desc: 'Soạn thông báo chính thức gửi đến các cơ quan, đơn vị', icon: '📢' },
    { name: 'Tóm tắt văn bản pháp luật', desc: 'Tóm tắt nội dung chính của văn bản pháp luật', icon: '⚖️' },
  ],
}

function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('Kinh doanh')
  const [activeTab, setActiveTab] = useState('Tất cả')
  const [search, setSearch] = useState('')

  const allTools = Object.entries(toolsByCategory).flatMap(([cat, tools]) =>
    tools.map(t => ({ ...t, category: cat }))
  )

  const displayTools = activeCategory === 'Tất cả'
    ? allTools
    : (toolsByCategory[activeCategory] || [])

  const filtered = displayTools.filter(t =>
    !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex-1 flex min-h-0 overflow-hidden">
      {/* Left category sidebar */}
      <div className="w-44 flex-shrink-0 border-r border-gray-100 bg-gray-50 py-3 overflow-y-auto">
        {toolCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`w-full text-left text-sm px-4 py-2.5 transition-all ${
              activeCategory === cat
                ? 'text-stone-800 font-semibold border-l-2 border-stone-600 bg-white'
                : 'text-gray-600 hover:bg-white hover:text-gray-900 border-l-2 border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Công cụ</h1>
            <p className="text-sm text-gray-500 mt-0.5">Khám phá bộ công cụ thông minh giúp bạn chinh phục mọi nhiệm vụ</p>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Tìm kiếm"
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-stone-300 w-52"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-6 py-3 border-b border-gray-100">
          {['Tất cả', 'Yêu thích'].map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                activeTab === t
                  ? 'bg-stone-700 text-white border-stone-700 font-medium'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tool grid */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {activeCategory !== 'Tất cả' && (
            <h2 className="text-base font-bold text-gray-900 mb-3">{activeCategory}</h2>
          )}
          <div className="grid grid-cols-3 gap-3">
            {filtered.map((tool, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-stone-200 hover:shadow-sm cursor-pointer transition-all group"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{tool.icon}</span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 mb-1 leading-tight">{tool.name}</p>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <span className="text-4xl mb-3">🔍</span>
              <p className="text-gray-400 text-sm">Không tìm thấy công cụ phù hợp</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Admin: Báo cáo ──────────────────────────────────────────────────────────

function AdminBaoCao() {
  const weeks = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
  const data = [0, 0, 0, 0, 0.6, 0, 0]

  return (
    <div className="flex-1 overflow-y-auto px-6 py-5">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-gray-900">Báo cáo</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
          </button>
          <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 outline-none bg-white">
            <option>Tất cả đơn vị</option>
          </select>
          <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 outline-none bg-white">
            <option>Tháng này</option>
            <option>Tuần này</option>
            <option>Quý này</option>
          </select>
        </div>
      </div>

      {/* Top stat cards */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        {/* Credit đã dùng */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-gray-500 font-medium">Credit đã dùng</span>
            <span className="text-xs text-gray-400">01/08/2026 – 13/08/2026</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-3xl font-bold text-gray-900">0</span>
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">0%</span>
          </div>
          <p className="text-xs text-gray-400 mb-3">~0 đ</p>
          <div className="bg-stone-50 border border-stone-100 rounded-lg px-3 py-2">
            <p className="text-xs text-gray-500">Thông tin tài nguyên hiện tại</p>
            <p className="text-sm font-semibold text-gray-800 mt-0.5">
              500 <svg className="inline" width="12" height="12" viewBox="0 0 24 24" fill="#92400e"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> / tháng
            </p>
          </div>
        </div>

        {/* Gauge chart */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center">
          <div className="relative w-32 h-16 mb-2">
            <svg viewBox="0 0 120 60" className="w-full">
              <path d="M10 55 A50 50 0 0 1 110 55" fill="none" stroke="#f3f4f6" strokeWidth="10" strokeLinecap="round"/>
              <path d="M10 55 A50 50 0 0 1 110 55" fill="none" stroke="#d6d3d1" strokeWidth="10" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="157"/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
              <span className="text-xl font-bold text-gray-800">0%</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">Hiệu suất sử dụng</p>
        </div>

        {/* Right stats */}
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-1">Tổng số người dùng</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">1</span>
                <span className="text-xs text-gray-400">0%</span>
              </div>
              <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-stone-500 rounded-full" style={{ width: '8%' }} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-1">Tỷ lệ sử dụng</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">0%</span>
                <span className="text-xs text-gray-400">0%</span>
              </div>
              <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-stone-500 rounded-full" style={{ width: '0%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        {/* Line chart */}
        <div className="col-span-2 bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-800">Biến động theo thời gian</span>
            <div className="flex items-center gap-2">
              <select className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-600 outline-none">
                <option>Tuần</option><option>Tháng</option><option>Quý</option>
              </select>
              <button className="text-gray-400 hover:text-gray-600">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.36"/></svg>
              </button>
            </div>
          </div>
          {/* Simple chart */}
          <div className="relative h-40">
            <div className="absolute inset-0 flex items-end gap-4 px-4 pb-6">
              {data.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center" style={{ height: '100px' }}>
                    <div
                      className="w-3/4 bg-stone-200 rounded-t-sm"
                      style={{ height: `${Math.max(v * 80, 2)}px` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">{weeks[i]}</span>
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between pointer-events-none">
              {[5,4,3,2,1,0].map(n => (
                <span key={n} className="text-[10px] text-gray-300 w-4">{n}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 justify-center">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <div className="w-3 h-1 rounded bg-stone-600" />Số Credit đã dùng
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <div className="w-3 h-1 rounded bg-stone-300" />Số người sử dụng
            </div>
          </div>
        </div>

        {/* AI model stats */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-800">Thống kê theo mô hình AI</span>
            <button className="text-gray-400 hover:text-gray-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.36"/></svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-36 text-center">
            <p className="text-sm text-gray-400">Không có dữ liệu</p>
          </div>
        </div>
      </div>

      {/* User table */}
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-4">
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <span className="text-sm font-semibold text-gray-800">Thống kê theo người dùng</span>
          <div className="flex items-center gap-2">
            <select className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-600 outline-none">
              <option>Dùng nhiều nhất</option>
            </select>
            <div className="relative">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
              <input placeholder="Tìm theo mã NV, họ tên..." className="pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg outline-none w-52" />
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.36"/></svg>
            </button>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {['Người dùng','Email tài khoản','Vị trí công việc','Phòng ban','Định mức','Chi phí đã dùng'].map(h => (
                <th key={h} className="text-left px-4 py-2.5 text-xs font-medium text-gray-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold">TH</div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Trần Thanh Hiếu</p>
                    <p className="text-xs text-gray-400">NV000001</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-400 text-xs">-</td>
              <td className="px-4 py-3 text-gray-400 text-xs">-</td>
              <td className="px-4 py-3 text-xs text-gray-700">CÔNG TY LUẬT TNHH TÂM PHÚC AG</td>
              <td className="px-4 py-3">
                <p className="text-xs text-gray-700">Định mức mặc định</p>
                <p className="text-xs text-gray-400">Không giới hạn</p>
              </td>
              <td className="px-4 py-3 text-xs text-gray-500">
                <p>0 <svg className="inline" width="10" height="10" viewBox="0 0 24 24" fill="#92400e"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></p>
                <p>0 đ</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="px-4 py-2.5 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100">
          <span>Tổng số: 1</span>
          <div className="flex items-center gap-2">
            <span>Số dòng/trang</span>
            <select className="border border-gray-200 rounded px-1.5 py-1 outline-none text-xs">
              <option>10</option><option>25</option><option>50</option>
            </select>
            <span>1 – 1</span>
          </div>
        </div>
      </div>

      {/* Department table */}
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <span className="text-sm font-semibold text-gray-800">Thống kê theo phòng ban</span>
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.36"/></svg>
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {['Phòng ban','Chi phí đã dùng','Tỷ trọng chi phí','Tổng số người dùng','Số người sử dụng','Tỷ lệ sử dụng'].map(h => (
                <th key={h} className="text-left px-4 py-2.5 text-xs font-medium text-gray-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-sm text-gray-800">CÔNG TY LUẬT TNHH TÂM PHÚC AG</td>
              <td className="px-4 py-3 text-xs text-gray-500">
                <p>0 <svg className="inline" width="10" height="10" viewBox="0 0 24 24" fill="#92400e"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></p>
                <p>0 đ</p>
              </td>
              <td className="px-4 py-3 text-xs text-gray-600">0%</td>
              <td className="px-4 py-3 text-xs text-gray-600">1</td>
              <td className="px-4 py-3 text-xs text-gray-600">0</td>
              <td className="px-4 py-3 text-xs text-gray-600">0%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Admin: Thiết lập định mức ────────────────────────────────────────────────

function AdminDinhMuc() {
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: '', desc: '', limit: '0', unlimited: false, model: 'Tất cả mô hình', status: 'active' })

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Thiết lập định mức</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 text-sm px-4 py-2 bg-stone-700 hover:bg-stone-800 text-white rounded-lg transition-colors"
        >
          <IconPlus /> Tạo định mức
        </button>
      </div>

      {/* Search */}
      <div className="px-6 py-3 border-b border-gray-100">
        <div className="relative w-72">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
          <input placeholder="Tìm kiếm theo tên định mức, mô tả" className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none w-full focus:border-stone-300" />
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['Tên định mức','Mô tả','Giới hạn credit','Mô hình được sử dụng','Trạng thái',''].map((h,i) => (
                  <th key={i} className="text-left px-4 py-3 text-xs font-medium text-gray-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition-colors border-b border-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Định mức mặc định</td>
                <td className="px-4 py-3 text-gray-500 text-xs max-w-xs">Mặc định áp dụng cho tất cả người dùng, trừ khi có định mức riêng được thiết lập.</td>
                <td className="px-4 py-3 text-gray-600 text-xs">Không giới hạn</td>
                <td className="px-4 py-3 text-gray-600 text-xs">Tất cả mô hình</td>
                <td className="px-4 py-3">
                  <span className="text-xs text-green-600 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full font-medium">Đang sử dụng</span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-4 py-2.5 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100">
            <span>Tổng số: 1</span>
            <div className="flex items-center gap-2">
              <span>Số dòng/trang</span>
              <select className="border border-gray-200 rounded px-1.5 py-1 outline-none text-xs"><option>25</option></select>
              <span>1 – 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Create Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Tạo định mức</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600"><IconX /></button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Tên định mức <span className="text-red-400">*</span></label>
                <input
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Nhập tên định mức"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 focus:border-stone-400 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Mô tả</label>
                <textarea
                  value={form.desc}
                  onChange={e => setForm(f => ({ ...f, desc: e.target.value.slice(0, 500) }))}
                  placeholder="Nhập mô tả định mức"
                  rows={3}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 focus:border-stone-400 rounded-lg outline-none resize-none"
                />
                <div className="text-right text-xs text-gray-400">{form.desc.length}/500</div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-gray-700">Giới hạn credit <span className="text-red-400">*</span></label>
                  <label className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.unlimited}
                      onChange={e => setForm(f => ({ ...f, unlimited: e.target.checked }))}
                      className="rounded"
                    />
                    Không giới hạn
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={form.unlimited ? '' : form.limit}
                    disabled={form.unlimited}
                    onChange={e => setForm(f => ({ ...f, limit: e.target.value }))}
                    className="flex-1 px-3 py-2.5 text-sm border border-gray-200 focus:border-stone-400 rounded-lg outline-none disabled:bg-gray-50 disabled:text-gray-400"
                  />
                  <span className="text-sm text-gray-500 whitespace-nowrap">credit / người / tháng</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-gray-700">Mô hình được sử dụng</label>
                  <label className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-stone-700" />
                    Tất cả mô hình
                  </label>
                </div>
                <select className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none bg-white">
                  <option>Tất cả mô hình</option>
                  <option>GPT</option><option>Claude</option><option>Gemini</option><option>Grok</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Trạng thái</label>
                <div className="flex gap-4">
                  {(['active', 'inactive'] as const).map(v => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                      <div
                        onClick={() => setForm(f => ({ ...f, status: v }))}
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer ${form.status === v ? 'border-stone-600 bg-stone-600' : 'border-gray-300'}`}
                      >
                        {form.status === v && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      {v === 'active' ? 'Đang sử dụng' : 'Ngừng sử dụng'}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-5 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Hủy</button>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-stone-700 hover:bg-stone-800 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Admin: Phân quyền tính năng ────────────────────────────────────────────

function AdminPhanQuyen() {
  const roles = [
    { id: 'system', name: 'Quản trị hệ thống', count: 1, description: 'Toàn quyền truy cập và quản trị' },
    { id: 'unit', name: 'Quản trị đơn vị', count: 3, description: 'Quản lý người dùng và định mức trong đơn vị' },
    { id: 'manager', name: 'Quản lý bộ phận', count: 9, description: 'Truy cập theo nhóm và báo cáo nội bộ' },
    { id: 'user', name: 'Người dùng', count: 52, description: 'Dùng tính năng theo hạn mức được cấp' },
  ] as const

  const featureGroups = [
    {
      group: 'AI Studio',
      features: [
        { id: 'studio-chart', name: 'Tạo biểu đồ', icon: '📊', description: 'Tạo báo cáo, sơ đồ và trực quan hóa dữ liệu' },
        { id: 'studio-infographic', name: 'Infographic', icon: '🎨', description: 'Thiết kế infographic và poster' },
        { id: 'studio-slide', name: 'Slide', icon: '🧾', description: 'Tạo slide, trình bày nội dung' },
      ],
    },
    {
      group: 'Tài liệu & làm việc',
      features: [
        { id: 'workspace', name: 'Workspace', icon: '📁', description: 'Quản lý dự án, thư mục và tài liệu' },
        { id: 'notebook', name: 'Notebook', icon: '📝', description: 'Ghi chú, tóm tắt và phân tích' },
        { id: 'meeting', name: 'Ghi chép cuộc họp', icon: '🎙️', description: 'Thu âm, tóm tắt và lưu trữ cuộc họp' },
      ],
    },
    {
      group: 'Quản trị',
      features: [
        { id: 'report', name: 'Báo cáo', icon: '📈', description: 'Xem báo cáo tổng hợp và thống kê' },
        { id: 'quota', name: 'Thiết lập định mức', icon: '⚙️', description: 'Cấu hình giới hạn credit và định mức' },
        { id: 'users', name: 'Quản lý người dùng', icon: '👥', description: 'Thêm, chỉnh sửa và vô hiệu hóa tài khoản' },
      ],
    },
  ] as const

  type PermissionAction = 'view' | 'edit' | 'export'
  type RolePermissionMap = Record<string, Record<string, Record<PermissionAction, boolean>>>

  const [selectedRole, setSelectedRole] = useState<string>(roles[0].name)
  const [search, setSearch] = useState('')
  const [rolePermissions, setRolePermissions] = useState<RolePermissionMap>({
    'Quản trị hệ thống': {
      'studio-chart': { view: true, edit: true, export: true },
      'studio-infographic': { view: true, edit: true, export: true },
      'studio-slide': { view: true, edit: true, export: true },
      workspace: { view: true, edit: true, export: true },
      notebook: { view: true, edit: true, export: true },
      meeting: { view: true, edit: true, export: true },
      report: { view: true, edit: true, export: true },
      quota: { view: true, edit: true, export: true },
      users: { view: true, edit: true, export: true },
    },
    'Quản trị đơn vị': {
      'studio-chart': { view: true, edit: true, export: true },
      'studio-infographic': { view: true, edit: false, export: true },
      'studio-slide': { view: true, edit: true, export: true },
      workspace: { view: true, edit: true, export: false },
      notebook: { view: true, edit: true, export: true },
      meeting: { view: true, edit: true, export: false },
      report: { view: true, edit: false, export: true },
      quota: { view: true, edit: false, export: false },
      users: { view: true, edit: true, export: false },
    },
    'Quản lý bộ phận': {
      'studio-chart': { view: true, edit: false, export: true },
      'studio-infographic': { view: true, edit: false, export: false },
      'studio-slide': { view: true, edit: false, export: false },
      workspace: { view: true, edit: false, export: false },
      notebook: { view: true, edit: true, export: false },
      meeting: { view: true, edit: true, export: false },
      report: { view: true, edit: false, export: true },
      quota: { view: false, edit: false, export: false },
      users: { view: false, edit: false, export: false },
    },
    'Người dùng': {
      'studio-chart': { view: true, edit: false, export: false },
      'studio-infographic': { view: true, edit: false, export: false },
      'studio-slide': { view: true, edit: false, export: false },
      workspace: { view: true, edit: true, export: false },
      notebook: { view: true, edit: true, export: false },
      meeting: { view: true, edit: false, export: false },
      report: { view: false, edit: false, export: false },
      quota: { view: false, edit: false, export: false },
      users: { view: false, edit: false, export: false },
    },
  })

  const togglePermission = (featureId: string, action: PermissionAction) => {
    const currentRoleData = rolePermissions[selectedRole] ?? {}
    const currentFeature = currentRoleData[featureId] ?? { view: false, edit: false, export: false }

    setRolePermissions((prev) => ({
      ...prev,
      [selectedRole]: {
        ...prev[selectedRole],
        [featureId]: {
          ...currentFeature,
          [action]: !currentFeature[action],
        },
      },
    }))
  }

  const filteredGroups = featureGroups
    .map((group) => ({
      ...group,
      features: group.features.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        group.group.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((group) => group.features.length > 0)

  const activePermissions = rolePermissions[selectedRole] ?? {}
  const permissionSummary = {
    view: Object.values(activePermissions).filter((item) => item.view).length,
    edit: Object.values(activePermissions).filter((item) => item.edit).length,
    export: Object.values(activePermissions).filter((item) => item.export).length,
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Phân quyền tính năng</h2>
          <p className="text-xs text-gray-500 mt-0.5">Quản lý quyền truy cập theo vai trò và nhóm người dùng</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            Sao chép quyền
          </button>
          <button className="px-4 py-2 text-sm bg-stone-700 hover:bg-stone-800 rounded-lg text-white transition-colors font-medium">
            Lưu thay đổi
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[240px_minmax(0,1fr)] flex-1 min-h-0 overflow-hidden">
        <aside className="border-r border-gray-100 bg-gray-50 p-3 overflow-y-auto">
          <div className="mb-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 font-semibold">Vai trò</p>
          </div>
          <div className="space-y-2">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.name)}
                className={`w-full text-left rounded-xl border p-3 transition-all ${
                  selectedRole === role.name
                    ? 'bg-white border-stone-200 shadow-sm'
                    : 'bg-transparent border-transparent hover:bg-white/80'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-800">{role.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium">
                    {role.count}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">{role.description}</p>
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1 overflow-y-auto p-5">
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="text-xs text-gray-500 mb-1">Tổng quyền xem</p>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-900">{permissionSummary.view}</span>
                <span className="text-[11px] text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">Đang bật</span>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="text-xs text-gray-500 mb-1">Tổng quyền chỉnh sửa</p>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-900">{permissionSummary.edit}</span>
                <span className="text-[11px] text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">Cần kiểm duyệt</span>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="text-xs text-gray-500 mb-1">Tổng quyền xuất</p>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-900">{permissionSummary.export}</span>
                <span className="text-[11px] text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">Bảo mật</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div>
                <h3 className="text-base font-bold text-gray-900">{selectedRole}</h3>
                <p className="text-[11px] text-gray-500">Thiết lập quyền truy cập tính năng</p>
              </div>
              <div className="relative w-64">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Tìm tính năng"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-stone-300"
                />
              </div>
            </div>

            <div className="p-4 space-y-5">
              {filteredGroups.map((group) => (
                <div key={group.group} className="border border-gray-100 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between bg-stone-50 px-4 py-2.5 border-b border-gray-100">
                    <p className="text-sm font-semibold text-stone-800">{group.group}</p>
                    <span className="text-[11px] text-gray-500">{group.features.length} tính năng</span>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {group.features.map((feature) => {
                      const permissions = rolePermissions[selectedRole]?.[feature.id] ?? { view: false, edit: false, export: false }

                      return (
                        <div key={feature.id} className="grid grid-cols-[minmax(0,1.8fr)_repeat(3,minmax(0,0.7fr))] gap-3 px-4 py-3 items-center">
                          <div className="flex items-start gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-stone-100 to-gray-100 flex items-center justify-center text-lg shadow-inner">
                              {feature.icon}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-800 truncate">{feature.name}</p>
                              <p className="text-[11px] text-gray-500 leading-relaxed">{feature.description}</p>
                            </div>
                          </div>

                          {(['view', 'edit', 'export'] as PermissionAction[]).map((action) => (
                            <label
                              key={action}
                              className="flex items-center justify-center gap-2 text-xs text-gray-600 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={permissions[action]}
                                onChange={() => togglePermission(feature.id, action)}
                                className="accent-stone-700 rounded"
                              />
                              <span className="capitalize">{action === 'view' ? 'Xem' : action === 'edit' ? 'Sửa' : 'Xuất'}</span>
                            </label>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}

              {filteredGroups.length === 0 && (
                <div className="py-10 text-center text-sm text-gray-400">
                  Không tìm thấy tính năng phù hợp với từ khóa tìm kiếm.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Admin: Quản lý người dùng ────────────────────────────────────────────────

type PermissionAction = 'view' | 'edit' | 'export'
type FeaturePermission = Record<PermissionAction, boolean>

type UserRow = { name: string; email: string; role: string; permissions: Record<string, FeaturePermission> }
type StoredUser = UserRow & { id: string; department: string; status: 'Đang sử dụng' | 'Tạm khóa' }

const STORAGE_KEY = 'thanhdanh-users'

function getDefaultUserPermissions(role: string): Record<string, FeaturePermission> {
  const base: Record<string, FeaturePermission> = {
    'studio-chart': { view: true, edit: false, export: false },
    'studio-infographic': { view: true, edit: false, export: false },
    'studio-slide': { view: true, edit: false, export: false },
    workspace: { view: true, edit: true, export: false },
    notebook: { view: true, edit: true, export: false },
    meeting: { view: true, edit: false, export: false },
    report: { view: false, edit: false, export: false },
    quota: { view: false, edit: false, export: false },
    users: { view: false, edit: false, export: false },
  }

  if (role === 'Quản trị đơn vị') {
    return {
      'studio-chart': { view: true, edit: true, export: true },
      'studio-infographic': { view: true, edit: true, export: true },
      'studio-slide': { view: true, edit: true, export: true },
      workspace: { view: true, edit: true, export: true },
      notebook: { view: true, edit: true, export: true },
      meeting: { view: true, edit: true, export: true },
      report: { view: true, edit: true, export: true },
      quota: { view: true, edit: false, export: false },
      users: { view: true, edit: true, export: false },
    }
  }

  if (role === 'Quản trị hệ thống') {
    return {
      'studio-chart': { view: true, edit: true, export: true },
      'studio-infographic': { view: true, edit: true, export: true },
      'studio-slide': { view: true, edit: true, export: true },
      workspace: { view: true, edit: true, export: true },
      notebook: { view: true, edit: true, export: true },
      meeting: { view: true, edit: true, export: true },
      report: { view: true, edit: true, export: true },
      quota: { view: true, edit: true, export: true },
      users: { view: true, edit: true, export: true },
    }
  }

  return base
}

const defaultUsers: StoredUser[] = [
  {
    id: 'NV000001',
    name: 'Trần Thanh Hiếu',
    email: 'thanhhieu@thanhdanh.ai',
    role: 'Quản trị hệ thống',
    department: 'CÔNG TY LUẬT TNHH TÂM PHÚC AG',
    status: 'Đang sử dụng',
    permissions: getDefaultUserPermissions('Quản trị hệ thống'),
  },
]

const userPermissionGroups = [
  {
    group: 'AI Studio',
    features: [
      { id: 'studio-chart', label: 'Tạo biểu đồ' },
      { id: 'studio-infographic', label: 'Infographic' },
      { id: 'studio-slide', label: 'Slide' },
    ],
  },
  {
    group: 'Làm việc',
    features: [
      { id: 'workspace', label: 'Workspace' },
      { id: 'notebook', label: 'Notebook' },
      { id: 'meeting', label: 'Ghi chép cuộc họp' },
    ],
  },
  {
    group: 'Quản trị',
    features: [
      { id: 'report', label: 'Báo cáo' },
      { id: 'quota', label: 'Thiết lập định mức' },
      { id: 'users', label: 'Quản lý người dùng' },
    ],
  },
] as const

function EditUserModal({ user, onClose, onSave }: { user: StoredUser; onClose: () => void; onSave: (user: StoredUser) => void }) {
  const [form, setForm] = useState<StoredUser>({ ...user })

  const updateForm = <K extends keyof StoredUser>(field: K, value: StoredUser[K]) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const updatePermission = (featureId: string, action: PermissionAction, checked: boolean) => {
    setForm(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [featureId]: {
          ...(prev.permissions[featureId] ?? { view: false, edit: false, export: false }),
          [action]: checked,
        },
      },
    }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[90vh]">
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h3 className="text-base font-bold text-gray-900">Chỉnh sửa người dùng</h3>
            <p className="text-xs text-gray-400 mt-0.5">Cập nhật thông tin cá nhân và quyền truy cập</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 mt-0.5"><IconX /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Họ và tên</label>
              <input
                value={form.name}
                onChange={e => updateForm('name', e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-stone-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
              <input
                value={form.email}
                onChange={e => updateForm('email', e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-stone-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Vai trò</label>
              <select
                value={form.role}
                onChange={e => {
                  const nextRole = e.target.value
                  updateForm('role', nextRole)
                  setForm(prev => ({ ...prev, permissions: getDefaultUserPermissions(nextRole) }))
                }}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none bg-white"
              >
                <option>Người dùng</option>
                <option>Quản trị hệ thống</option>
                <option>Quản trị đơn vị</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Trạng thái</label>
              <select
                value={form.status}
                onChange={e => updateForm('status', e.target.value as StoredUser['status'])}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none bg-white"
              >
                <option>Đang sử dụng</option>
                <option>Tạm khóa</option>
              </select>
            </div>
          </div>

          <div className="border border-gray-100 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-stone-50 border-b border-gray-100">
              <div>
                <p className="text-sm font-semibold text-gray-900">Phân quyền trực tiếp</p>
                <p className="text-[11px] text-gray-500">Điều chỉnh quyền cho người dùng</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-white border border-stone-200 rounded-full text-stone-700 font-medium">
                {form.role}
              </span>
            </div>

            <div className="p-4 space-y-4">
              {userPermissionGroups.map(group => (
                <div key={group.group} className="rounded-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600">{group.group}</div>
                  <div className="divide-y divide-gray-100">
                    {group.features.map(feature => {
                      const permissions = form.permissions[feature.id] ?? { view: false, edit: false, export: false }
                      return (
                        <div key={feature.id} className="grid grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,0.7fr))] gap-3 px-3 py-3 items-center">
                          <div className="text-sm font-medium text-gray-700">{feature.label}</div>
                          {(['view', 'edit', 'export'] as PermissionAction[]).map(action => (
                            <label key={`${feature.id}-${action}`} className="flex items-center justify-center gap-2 text-[11px] text-gray-600 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={permissions[action]}
                                onChange={e => updatePermission(feature.id, action, e.target.checked)}
                                className="accent-stone-700 rounded"
                              />
                              <span>{action === 'view' ? 'Xem' : action === 'edit' ? 'Sửa' : 'Xuất'}</span>
                            </label>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-400">Cập nhật quyền và thông tin người dùng</span>
          <div className="flex gap-3">
            <button onClick={onClose} className="px-5 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Hủy</button>
            <button
              onClick={() => {
                if (!form.name.trim() || !form.email.trim()) return
                onSave(form)
              }}
              className="px-6 py-2 bg-stone-700 hover:bg-stone-800 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AddUserModal({ onClose, onSave }: { onClose: () => void; onSave: (users: UserRow[]) => void }) {
  const [rows, setRows] = useState<UserRow[]>([{ name: '', email: '', role: 'Người dùng', permissions: getDefaultUserPermissions('Người dùng') }])
  const [showInfo, setShowInfo] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const addRow = () => {
    setRows(r => [...r, { name: '', email: '', role: 'Người dùng', permissions: getDefaultUserPermissions('Người dùng') }])
    setSelectedIndex(rows.length)
  }

  const updateRow = (i: number, field: keyof UserRow, val: string) =>
    setRows(r => r.map((row, idx) => {
      if (idx !== i) return row
      if (field === 'role') {
        return { ...row, role: val, permissions: getDefaultUserPermissions(val) }
      }
      return { ...row, [field]: val }
    }))

  const updatePermission = (i: number, featureId: string, action: PermissionAction, checked: boolean) => {
    setRows(r => r.map((row, idx) => {
      if (idx !== i) return row
      const current = row.permissions[featureId] ?? { view: false, edit: false, export: false }
      return {
        ...row,
        permissions: {
          ...row.permissions,
          [featureId]: { ...current, [action]: checked },
        },
      }
    }))
  }

  const removeRow = (i: number) => {
    const nextRows = rows.filter((_, idx) => idx !== i)
    setRows(nextRows.length ? nextRows : [{ name: '', email: '', role: 'Người dùng', permissions: getDefaultUserPermissions('Người dùng') }])
    setSelectedIndex(0)
  }

  const activeRow = rows[selectedIndex] ?? rows[0]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[90vh]">
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h3 className="text-base font-bold text-gray-900">Thêm người dùng</h3>
            <p className="text-xs text-gray-400 mt-0.5">Người dùng sau khi được thêm, cần kích hoạt email để truy cập phần mềm.</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 mt-0.5"><IconX /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 pr-3 text-xs font-medium text-gray-500 w-10">STT</th>
                <th className="text-left py-2 pr-3 text-xs font-medium text-gray-500">Họ và tên</th>
                <th className="text-left py-2 pr-3 text-xs font-medium text-gray-500">
                  Email tài khoản
                  <button className="ml-1 text-gray-300 hover:text-gray-500 align-middle"><IconInfo /></button>
                </th>
                <th className="text-left py-2 text-xs font-medium text-gray-500">Vai trò</th>
                <th className="w-6" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {rows.map((row, i) => (
                <tr
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`cursor-pointer transition-colors ${selectedIndex === i ? 'bg-stone-50' : ''}`}
                >
                  <td className="py-2 pr-3 text-xs text-gray-400">{i + 1}</td>
                  <td className="py-2 pr-3">
                    <input
                      value={row.name}
                      onChange={e => updateRow(i, 'name', e.target.value)}
                      placeholder="Nhập họ và tên"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-stone-400 placeholder-gray-300"
                    />
                  </td>
                  <td className="py-2 pr-3">
                    <input
                      value={row.email}
                      onChange={e => updateRow(i, 'email', e.target.value)}
                      placeholder="Nhập email tài khoản"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-stone-400 placeholder-gray-300"
                    />
                  </td>
                  <td className="py-2">
                    <select
                      value={row.role}
                      onChange={e => updateRow(i, 'role', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none bg-white"
                    >
                      <option>Người dùng</option>
                      <option>Quản trị hệ thống</option>
                      <option>Quản trị đơn vị</option>
                    </select>
                  </td>
                  <td className="py-2 pl-2">
                    {rows.length > 1 && (
                      <button onClick={() => removeRow(i)} className="text-gray-300 hover:text-red-400 transition-colors">
                        <IconX />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={addRow}
            className="mt-3 flex items-center gap-1.5 text-sm text-stone-700 hover:text-stone-900 font-medium transition-colors"
          >
            <IconPlus /> Thêm dòng
          </button>

          <div className="mt-5 border border-gray-100 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-stone-50 border-b border-gray-100">
              <div>
                <p className="text-sm font-semibold text-gray-900">Phân quyền trực tiếp</p>
                <p className="text-[11px] text-gray-500">Cấu hình quyền cho người dùng đang chọn</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-white border border-stone-200 rounded-full text-stone-700 font-medium">
                {activeRow?.role}
              </span>
            </div>

            <div className="p-4 space-y-4">
              {userPermissionGroups.map(group => (
                <div key={group.group} className="rounded-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    {group.group}
                  </div>
                  <div className="divide-y divide-gray-100">
                    {group.features.map(feature => {
                      const permissions = activeRow?.permissions[feature.id] ?? { view: false, edit: false, export: false }

                      return (
                        <div key={feature.id} className="grid grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,0.7fr))] gap-3 px-3 py-3 items-center">
                          <div className="text-sm font-medium text-gray-700">{feature.label}</div>
                          {(['view', 'edit', 'export'] as PermissionAction[]).map(action => (
                            <label key={`${feature.id}-${action}`} className="flex items-center justify-center gap-2 text-[11px] text-gray-600 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={permissions[action]}
                                onChange={e => updatePermission(selectedIndex, feature.id, action, e.target.checked)}
                                className="accent-stone-700 rounded"
                              />
                              <span>{action === 'view' ? 'Xem' : action === 'edit' ? 'Sửa' : 'Xuất'}</span>
                            </label>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showInfo && (
          <div className="mx-6 mb-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-start gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" className="flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12" stroke="white" strokeWidth="2"/><line x1="12" y1="16" x2="12.01" y2="16" stroke="white" strokeWidth="2"/></svg>
            <p className="text-xs text-blue-700 flex-1">
              Khi mỗi người dùng mới kích hoạt thành công và phát sinh lượt hỏi đầu tiên thì tài khoản công ty được cộng thêm <span className="font-bold">50 credit</span>.
            </p>
            <button onClick={() => setShowInfo(false)} className="text-blue-300 hover:text-blue-500 flex-shrink-0"><IconX /></button>
          </div>
        )}

        <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between">
          <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.36"/></svg>
            Nhập khẩu
          </button>
          <div className="flex gap-3">
            <button onClick={onClose} className="px-5 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Hủy</button>
            <button
              onClick={() => {
                const validRows = rows.filter(row => row.name.trim() && row.email.trim())
                if (!validRows.length) return
                onSave(validRows)
                onClose()
              }}
              className="px-6 py-2 bg-stone-700 hover:bg-stone-800 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AdminUsers() {
  const getStoredUsers = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return defaultUsers
      const parsed = JSON.parse(raw) as StoredUser[]
      return parsed.length ? parsed : defaultUsers
    } catch {
      return defaultUsers
    }
  }

  const [tab, setTab] = useState<'all' | 'admin' | 'user'>('all')
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'locked'>('all')
  const [roleFilter, setRoleFilter] = useState('all')
  const [editingUser, setEditingUser] = useState<StoredUser | null>(null)
  const [users, setUsers] = useState<StoredUser[]>(getStoredUsers)

  const persistUsers = (nextUsers: StoredUser[]) => {
    setUsers(nextUsers)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUsers))
  }

  const handleSaveUsers = (newUsers: UserRow[]) => {
    const merged: StoredUser[] = newUsers.map((user, index) => ({
      id: `NV${String(Date.now() + index).slice(-6)}`,
      name: user.name.trim(),
      email: user.email.trim(),
      role: user.role,
      department: 'CÔNG TY LUẬT TNHH TÂM PHÚC AG',
      status: 'Đang sử dụng',
      permissions: user.permissions,
    }))

    const nextUsers = [...users, ...merged]
    persistUsers(nextUsers)
  }

  const handleDeleteUser = (id: string) => {
    const nextUsers = users.filter((user) => user.id !== id)
    persistUsers(nextUsers)
  }

  const handleUpdateUser = (updatedUser: StoredUser) => {
    const nextUsers = users.map((user) => user.id === updatedUser.id ? updatedUser : user)
    persistUsers(nextUsers)
    setShowEdit(false)
    setEditingUser(null)
  }

  const toggleUserStatus = (id: string) => {
    const nextUsers = users.map((user) => {
      if (user.id !== id) return user
      return {
        ...user,
        status: user.status === 'Đang sử dụng' ? 'Tạm khóa' : 'Đang sử dụng',
      }
    })
    persistUsers(nextUsers)
  }

  const filteredUsers = users.filter((user) => {
    const matchesTab =
      tab === 'all'
        ? true
        : tab === 'admin'
          ? user.role.includes('Quản trị')
          : !user.role.includes('Quản trị')

    const matchesSearch = !search ||
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.id.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === 'all'
        ? true
        : statusFilter === 'active'
          ? user.status === 'Đang sử dụng'
          : user.status === 'Tạm khóa'

    const matchesRole = roleFilter === 'all' ? true : user.role === roleFilter

    return matchesTab && matchesSearch && matchesStatus && matchesRole
  })

  const tabs = [
    { id: 'all', label: 'Tất cả', count: users.length },
    { id: 'admin', label: 'Quản trị', count: users.filter(u => u.role.includes('Quản trị')).length },
    { id: 'user', label: 'Người dùng', count: users.filter(u => !u.role.includes('Quản trị')).length },
  ] as const

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
        <div className="flex items-center gap-1">
          <h2 className="text-base font-bold text-gray-900 mr-4">Quản lý người dùng</h2>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-lg transition-all ${
                tab === t.id ? 'bg-stone-50 text-stone-800 font-medium' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                tab === t.id ? 'bg-stone-200 text-stone-700' : 'bg-gray-100 text-gray-500'
              }`}>{t.count}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
          </button>
          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center gap-1.5 text-sm px-4 py-2 bg-stone-700 hover:bg-stone-800 text-white rounded-lg transition-colors font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            Thêm người dùng
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 px-6 py-3 border-b border-gray-100">
        <div className="relative flex-1 max-w-sm">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Tìm kiếm theo họ tên, mã nhân viên, email"
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-stone-300"
          />
        </div>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 outline-none bg-white">
          <option>Tất cả đơn vị</option>
        </select>
        <select
          value={roleFilter}
          onChange={e => setRoleFilter(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 outline-none bg-white"
        >
          <option value="all">Tất cả vai trò</option>
          <option value="Quản trị hệ thống">Quản trị hệ thống</option>
          <option value="Quản trị đơn vị">Quản trị đơn vị</option>
          <option value="Người dùng">Người dùng</option>
        </select>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as 'all' | 'active' | 'locked')}
          className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 outline-none bg-white"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="active">Đang sử dụng</option>
          <option value="locked">Tạm khóa</option>
        </select>
      </div>

      <div className="flex-1 overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-white border-b border-gray-100 z-10">
            <tr>
              <th className="w-10 px-4 py-3"><input type="checkbox" className="rounded" /></th>
              {['Người dùng','Vị trí – Phòng ban','Email','Vai trò','Định mức','Trạng thái sử dụng','Thao tác'].map(h => (
                <th key={h} className="text-left px-3 py-3 text-xs font-medium text-gray-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => {
              const initials = user.name
                .split(' ')
                .slice(-2)
                .map(part => part[0])
                .join('')
                .slice(0, 2)
                .toUpperCase()

              return (
                <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3"><input type="checkbox" className="rounded" /></td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{initials}</div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-xs text-gray-600">{user.department}</td>
                  <td className="px-3 py-3 text-xs text-gray-700">{user.email}</td>
                  <td className="px-3 py-3 text-xs text-gray-700">{user.role}</td>
                  <td className="px-3 py-3">
                    <p className="text-xs text-gray-700">Định mức mặc định</p>
                    <p className="text-xs text-gray-400">Không giới hạn</p>
                  </td>
                  <td className="px-3 py-3">
                    <button
                      onClick={() => toggleUserStatus(user.id)}
                      className={`text-xs border px-2.5 py-1 rounded-full font-medium transition-colors ${
                        user.status === 'Đang sử dụng'
                          ? 'text-green-600 bg-green-50 border-green-100 hover:bg-green-100'
                          : 'text-amber-600 bg-amber-50 border-amber-100 hover:bg-amber-100'
                      }`}
                    >
                      {user.status}
                    </button>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingUser(user)
                          setShowEdit(true)
                        }}
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-xs text-red-500 hover:text-red-700 font-medium"
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>Tổng số: {users.length}</span>
        <div className="flex items-center gap-2">
          <span>Số dòng/trang</span>
          <select className="border border-gray-200 rounded px-1.5 py-1 outline-none text-xs"><option>25</option></select>
          <span>1 – {Math.min(users.length, 25)}</span>
          <div className="flex gap-1">
            {['⟨⟨','⟨','⟩','⟩⟩'].map(a => (
              <button key={a} className="px-1.5 py-1 rounded hover:bg-gray-100 text-gray-400">{a}</button>
            ))}
          </div>
        </div>
      </div>

      {showAdd && <AddUserModal onClose={() => setShowAdd(false)} onSave={handleSaveUsers} />}
      {showEdit && editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => {
            setShowEdit(false)
            setEditingUser(null)
          }}
          onSave={handleUpdateUser}
        />
      )}
    </div>
  )
}
// ─── Admin Shell ──────────────────────────────────────────────────────────────

function AdminPage({ onBack }: { onBack: () => void }) {
  const [adminPage, setAdminPage] = useState<'baocao' | 'dinhmuc' | 'phanquyen' | 'users'>('baocao')

  const menu = [
    { id: 'baocao', label: 'Báo cáo', icon: '📊' },
    { id: 'dinhmuc', label: 'Thiết lập định mức', icon: '⚙️' },
    { id: 'phanquyen', label: 'Phân quyền tính năng', icon: '🔐' },
    { id: 'users', label: 'Quản lý người dùng', icon: '👥' },
  ] as const

  return (
    <div className="flex-1 flex min-h-0 overflow-hidden">
      {/* Admin sidebar */}
      <aside className="w-44 flex-shrink-0 border-r border-gray-100 bg-gray-50 flex flex-col py-3">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 mb-2 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          Quản trị
        </button>
        {menu.map(item => (
          <button
            key={item.id}
            onClick={() => setAdminPage(item.id)}
            className={`w-full text-left flex items-center gap-2.5 px-4 py-2.5 text-sm transition-all ${
              adminPage === item.id
                ? 'bg-white text-stone-800 font-semibold border-l-2 border-stone-600'
                : 'text-gray-600 hover:bg-white hover:text-gray-900 border-l-2 border-transparent'
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </aside>

      {/* Admin content */}
      {adminPage === 'baocao' && <AdminBaoCao />}
      {adminPage === 'dinhmuc' && <AdminDinhMuc />}
      {adminPage === 'phanquyen' && <AdminPhanQuyen />}
      {adminPage === 'users' && <AdminUsers />}
    </div>
  )
}

// ─── AI Studio: Tạo biểu đồ ─────────────────────────────────────────────────

const chartTypes = [
  { id: 'auto', label: 'Tự động', icon: '⚡', special: true },
  { id: 'line', label: 'Biểu đồ đường', preview: '📈' },
  { id: 'bar', label: 'Biểu đồ cột', preview: '📊' },
  { id: 'stacked', label: 'Biểu đồ xếp chồng', preview: '📊' },
  { id: 'hbar', label: 'Biểu đồ thanh', preview: '📉' },
  { id: 'area', label: 'Biểu đồ vùng', preview: '📈' },
  { id: 'pie', label: 'Biểu đồ tròn', preview: '🥧' },
  { id: 'donut', label: 'Biểu đồ vòng', preview: '🍩' },
  { id: 'scatter', label: 'Biểu đồ phân tán', preview: '✦' },
  { id: 'waterfall', label: 'Biểu đồ thác nước', preview: '📊' },
  { id: 'histogram', label: 'Biểu đồ tần suất', preview: '📊' },
  { id: 'gantt', label: 'Biểu đồ Gantt', preview: '📋' },
]

function ChartPage({ setPage }: { setPage: (p: Page) => void }) {
  const [input, setInput] = useState('')
  const [selected, setSelected] = useState('auto')
  const [step, setStep] = useState(1)

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
        <button
          onClick={() => setPage('studio')}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          AI Studio / Tạo biểu đồ
        </button>

        {/* Stepper */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-stone-700 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <span className={`text-sm font-medium ${step === 1 ? 'text-stone-800' : 'text-gray-400'}`}>Nhập yêu cầu</span>
          </div>
          <div className="w-12 h-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-stone-700 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            <span className={`text-sm font-medium ${step === 2 ? 'text-stone-800' : 'text-gray-400'}`}>Tạo biểu đồ</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Tạo mới
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
            <IconHistory /> Lịch sử
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center px-8 py-10">
        {/* Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-stone-600 to-amber-700 flex items-center justify-center text-xl">📊</div>
          <h1 className="text-2xl font-bold text-gray-900">Tạo biểu đồ</h1>
          <span className="text-yellow-400 text-xl">✦</span>
        </div>
        <p className="text-sm text-gray-400 mb-8">Chuyển ý tưởng của bạn thành biểu đồ ấn tượng trong vài giây</p>

        {/* Text area */}
        <div className="w-full max-w-2xl mb-8">
          <div className="border-2 border-stone-200 focus-within:border-stone-400 rounded-2xl bg-white shadow-sm transition-colors overflow-hidden">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value.slice(0, 10000))}
              placeholder="Nhập nội dung hoặc số liệu bạn muốn tạo thành biểu đồ"
              rows={5}
              className="w-full px-5 py-4 text-sm text-gray-800 placeholder-gray-300 resize-none outline-none"
            />
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-100">
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
              </button>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-300">{input.length.toLocaleString()} / 10.000</span>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chart type grid */}
        <div className="w-full max-w-3xl">
          <div className="grid grid-cols-6 gap-3">
            {chartTypes.map(ct => (
              <button
                key={ct.id}
                onClick={() => setSelected(ct.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                  selected === ct.id
                    ? 'border-stone-500 bg-stone-50 shadow-sm'
                    : 'border-gray-100 bg-white hover:border-stone-200 hover:bg-stone-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                  ct.special
                    ? selected === ct.id
                      ? 'bg-stone-700 text-white'
                      : 'bg-stone-100 text-stone-600'
                    : 'bg-gray-50'
                }`}>
                  {ct.special ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  ) : (
                    <span className="text-lg">{ct.preview}</span>
                  )}
                </div>
                <span className={`text-[10px] text-center leading-tight font-medium ${
                  selected === ct.id ? 'text-stone-800' : 'text-gray-500'
                }`}>
                  {ct.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom action */}
      <div className="border-t border-gray-100 px-8 py-4 flex justify-center">
        <button
          onClick={() => input.trim() && setStep(2)}
          disabled={!input.trim()}
          className="flex items-center gap-2 px-10 py-3 bg-stone-700 hover:bg-stone-800 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold rounded-xl transition-colors shadow-sm"
        >
          Tạo biểu đồ
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span className="text-sm font-normal opacity-80">3,7</span>
        </button>
      </div>
    </div>
  )
}

// ─── AI Studio: Tạo Infographic ──────────────────────────────────────────────

const infographicLayouts = [
  { id: 'timeline', label: 'Timeline', color: 'from-blue-400 to-indigo-400' },
  { id: 'gantt', label: 'Gantt', color: 'from-teal-400 to-green-400' },
  { id: 'circle', label: 'Vòng tròn', color: 'from-purple-400 to-pink-400' },
  { id: 'sequence', label: 'Trình tự', color: 'from-amber-400 to-orange-400' },
  { id: 'compare', label: 'So sánh', color: 'from-sky-400 to-blue-400' },
  { id: 'pyramid', label: 'Kim tự tháp', color: 'from-rose-400 to-red-400' },
  { id: 'mindmap', label: 'Mindmap', color: 'from-green-400 to-teal-400' },
  { id: 'funnel', label: 'Phễu', color: 'from-violet-400 to-purple-400' },
  { id: 'cycle', label: 'Vòng lặp', color: 'from-cyan-400 to-sky-400' },
  { id: 'matrix', label: 'Ma trận', color: 'from-orange-400 to-amber-400' },
]

function InfographicPage({ setPage }: { setPage: (p: Page) => void }) {
  const [model, setModel] = useState('nano')
  const [content, setContent] = useState('')
  const [layout, setLayout] = useState('auto')
  const [style, setStyle] = useState('auto')
  const [selectedModel, setSelectedModel] = useState('nano')
  const [selectedLayout, setSelectedLayout] = useState('')

  return (
    <div className="flex-1 flex min-h-0 overflow-hidden">
      {/* ── Left panel ── */}
      <div className="w-[340px] flex-shrink-0 border-r border-gray-100 flex flex-col bg-white overflow-y-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100">
          <button onClick={() => setPage('studio')} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            AI Studio
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-medium text-gray-800">Tạo infographic</span>
          <button className="ml-auto text-gray-400 hover:text-gray-600 text-xs flex items-center gap-1">
            <IconHistory /> Lịch sử
          </button>
        </div>

        <div className="flex-1 px-4 py-4 space-y-5 overflow-y-auto pb-24">
          {/* Model */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">Mô hình</label>
            <div className="relative">
              <select
                value={model}
                onChange={e => setModel(e.target.value)}
                className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none bg-white pr-10 cursor-pointer hover:border-stone-300 transition-colors"
              >
                <option value="nano">Nano Banana 2</option>
                <option value="gpt">GPT Image 2.0</option>
              </select>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-[9px] font-bold pointer-events-none">G</div>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>

          {/* Content textarea */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-gray-700">Nội dung cần thể hiện <span className="text-red-400">*</span></label>
              <span className="text-xs text-gray-400">{content.length} / 10.000</span>
            </div>
            <div className="border border-gray-200 rounded-xl overflow-hidden focus-within:border-stone-400 transition-colors">
              <textarea
                value={content}
                onChange={e => setContent(e.target.value.slice(0, 10000))}
                placeholder={'Nhập nội dung bạn muốn truyền tải trên Infographic.\nVí dụ: Quy trình Tiếp nhận nhân viên:\n• Giới thiệu chung về công ty\n• Đào tạo nội quy làm việc\n• Tiếp nhận công việc.'}
                rows={8}
                className="w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-300 resize-none outline-none leading-relaxed"
              />
              <div className="flex items-center gap-2 px-3 py-2 border-t border-gray-100 bg-gray-50">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-[8px] font-bold">G</div>
                  Tự động • 2K
                </span>
                <div className="flex items-center gap-1.5 ml-auto">
                  {[
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>,
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>,
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>,
                  ].map((icon, i) => (
                    <button key={i} className="text-gray-400 hover:text-gray-600 transition-colors">{icon}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bố cục */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">Bố cục</label>
            <div className="relative">
              <select className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none bg-white pr-10">
                <option>Tự động</option>
                {infographicLayouts.map(l => <option key={l.id}>{l.label}</option>)}
              </select>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-stone-500 to-amber-600 pointer-events-none" />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>

          {/* Phong cách minh họa */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">Phong cách minh họa</label>
            <div className="relative">
              <select className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none bg-white pr-10">
                <option>Tự động</option>
                <option>Hiện đại</option>
                <option>Tối giản</option>
                <option>Sáng tạo</option>
                <option>Chuyên nghiệp</option>
              </select>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-stone-500 to-amber-600 pointer-events-none" />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>

          {/* Hình ảnh tham chiếu */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
              Hình ảnh tham chiếu
              <button className="text-gray-300 hover:text-gray-500"><IconInfo /></button>
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 flex items-center justify-center cursor-pointer hover:border-stone-300 hover:bg-stone-50 transition-all">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span className="text-xs text-gray-400">Tải ảnh lên</span>
              </div>
            </div>
          </div>
        </div>

        {/* Generate button */}
        <div className="absolute bottom-0 left-0 w-[340px] p-4 bg-white border-t border-gray-100">
          <button
            disabled={!content.trim()}
            className="w-full flex items-center justify-center gap-2 py-3 bg-stone-700 hover:bg-stone-800 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold rounded-xl transition-colors"
          >
            Tạo infographic
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <span className="text-sm font-normal opacity-80">6</span>
          </button>
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="flex-1 overflow-y-auto px-10 py-8 bg-gray-50">
        {/* Hero title */}
        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
          Từ ý tưởng đến hình ảnh: Infographic đa phong cách với AI
        </h2>

        {/* Model cards */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            { id: 'nano', title: 'Tạo bằng Nano Banana 2', desc: 'Tạo ảnh nhanh với độ chân thực cao và tỷ lệ khung hình đa dạng', icon: 'G', colors: 'from-blue-400 to-indigo-500', samples: ['📊','📋','🏢'] },
            { id: 'gpt', title: 'Tạo bằng GPT Image 2.0', desc: 'Tạo ảnh sinh động với khả năng xử lý văn bản tốt và bố cục chuẩn chỉnh', icon: '🤖', colors: 'from-green-400 to-teal-500', samples: ['🍽️','📱','🏖️'] },
          ].map(card => (
            <div
              key={card.id}
              onClick={() => setSelectedModel(card.id)}
              className={`relative rounded-2xl p-5 cursor-pointer border-2 transition-all ${
                selectedModel === card.id
                  ? 'border-stone-500 bg-white shadow-md'
                  : 'border-gray-200 bg-white hover:border-stone-300'
              }`}
            >
              {selectedModel === card.id && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
              )}
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${card.colors} flex items-center justify-center text-white text-xs font-bold`}>{card.icon}</div>
                <span className="text-sm font-semibold text-gray-800">{card.title}</span>
              </div>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">{card.desc}</p>
              {/* Mock preview images */}
              <div className="flex gap-2 h-28 overflow-hidden rounded-xl">
                {card.samples.map((s, i) => (
                  <div key={i} className={`flex-1 rounded-lg bg-gradient-to-br ${card.colors} opacity-20 flex items-center justify-center text-3xl`}>{s}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Layout grid */}
        <h3 className="text-sm font-semibold text-gray-700 text-center mb-4">
          Tạo ảnh infographic với các bố cục đa dạng bằng AI
        </h3>
        <div className="grid grid-cols-5 gap-3">
          {infographicLayouts.map(lay => (
            <div
              key={lay.id}
              onClick={() => setSelectedLayout(lay.id)}
              className={`cursor-pointer rounded-xl border-2 overflow-hidden transition-all ${
                selectedLayout === lay.id ? 'border-stone-500 shadow-md' : 'border-gray-200 hover:border-stone-300'
              }`}
            >
              <div className={`h-28 bg-gradient-to-br ${lay.color} opacity-80 flex items-center justify-center`}>
                <span className="text-3xl">
                  {lay.id === 'timeline' && '⟶'}
                  {lay.id === 'gantt' && '▦'}
                  {lay.id === 'circle' && '◎'}
                  {lay.id === 'sequence' && '↓'}
                  {lay.id === 'compare' && '⇔'}
                  {lay.id === 'pyramid' && '△'}
                  {lay.id === 'mindmap' && '✦'}
                  {lay.id === 'funnel' && '▽'}
                  {lay.id === 'cycle' && '↻'}
                  {lay.id === 'matrix' && '⊞'}
                </span>
              </div>
              <div className="py-2 text-center text-xs font-medium text-gray-700 bg-white">{lay.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── AI Studio: Tạo Slide ─────────────────────────────────────────────────────

function SlidePage({ setPage }: { setPage: (p: Page) => void }) {
  const [step, setStep] = useState(1)
  const [inputTab, setInputTab] = useState<'text' | 'doc' | 'url'>('text')
  const [content, setContent] = useState('')
  const [pages, setPages] = useState('10')
  const [lang, setLang] = useState('vi')
  const [mode, setMode] = useState<'rewrite' | 'keep' | 'shorten'>('rewrite')

  const steps = ['Nhập yêu cầu', 'Tạo dàn ý', 'Tạo slide']
  const modes = [
    { id: 'rewrite', title: 'Viết lại bằng AI', desc: 'Biến ý tưởng sơ bộ thành nội dung hấp dẫn.' },
    { id: 'keep', title: 'Giữ nguyên nội dung', desc: 'Tạo nội dung chính xác theo bản văn bản của bạn.' },
    { id: 'shorten', title: 'Rút gọn nội dung', desc: 'Cô đọng văn bản của bạn thành nội dung ngắn gọn.' },
  ] as const

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
        <button onClick={() => setPage('studio')} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          AI Studio / Tạo slide
        </button>

        {/* Stepper */}
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`flex items-center gap-2 ${step === i + 1 ? '' : 'opacity-50'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                  step > i + 1 ? 'bg-stone-700 border-stone-700 text-white'
                  : step === i + 1 ? 'bg-stone-700 border-stone-700 text-white'
                  : 'border-gray-300 text-gray-400 bg-white'
                }`}>{i + 1}</div>
                <span className={`text-sm font-medium whitespace-nowrap ${step === i + 1 ? 'text-stone-800' : 'text-gray-400'}`}>{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center gap-0.5 mx-1">
                  <div className="w-6 h-px bg-gray-200" />
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
            <IconPlus /> Tạo mới
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
            <IconHistory /> Lịch sử
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center px-8 py-10">
        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-2xl font-bold text-gray-900">Tạo slide</h1>
          <span className="text-yellow-400 text-xl">✦</span>
        </div>
        <p className="text-sm text-gray-400 mb-8">Chuyển ý tưởng của bạn thành slide ấn tượng chỉ trong vài giây</p>

        {/* Input tabs */}
        <div className="w-full max-w-2xl mb-4">
          <div className="flex gap-1 mb-4">
            {([['text','📝','Văn bản'],['doc','📄','Tài liệu'],['url','🔗','Đường dẫn']] as const).map(([id, icon, label]) => (
              <button
                key={id}
                onClick={() => setInputTab(id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  inputTab === id
                    ? 'bg-stone-100 text-stone-800 border border-stone-200'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{icon}</span>{label}
              </button>
            ))}
          </div>

          {/* Textarea */}
          <div className="border-2 border-stone-300 focus-within:border-stone-500 rounded-2xl bg-white overflow-hidden transition-colors shadow-sm">
            {inputTab === 'text' && (
              <>
                <textarea
                  value={content}
                  onChange={e => setContent(e.target.value.slice(0, 10000))}
                  placeholder="Nhập chủ đề hoặc nội dung văn bản bạn muốn tạo thành slide"
                  rows={5}
                  className="w-full px-5 py-4 text-sm text-gray-800 placeholder-gray-300 resize-none outline-none"
                />
                <div className="flex items-center gap-3 px-4 py-2.5 border-t border-gray-100 bg-gray-50">
                  <div className="relative">
                    <select
                      value={pages}
                      onChange={e => setPages(e.target.value)}
                      className="appearance-none text-xs border border-gray-200 rounded-lg pl-6 pr-7 py-1.5 text-gray-600 outline-none bg-white"
                    >
                      {['5','8','10','12','15','20'].map(n => <option key={n}>{n} trang</option>)}
                    </select>
                    <svg className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <svg className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                  <div className="relative">
                    <select
                      value={lang}
                      onChange={e => setLang(e.target.value)}
                      className="appearance-none text-xs border border-gray-200 rounded-lg pl-6 pr-7 py-1.5 text-gray-600 outline-none bg-white"
                    >
                      <option value="vi">🇻🇳 Việt Nam</option>
                      <option value="en">🇺🇸 English</option>
                      <option value="ja">🇯🇵 日本語</option>
                      <option value="ko">🇰🇷 한국어</option>
                    </select>
                    <svg className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-xs text-gray-300">{content.length.toLocaleString()} / 10.000</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                    </button>
                  </div>
                </div>
              </>
            )}
            {inputTab === 'doc' && (
              <div className="flex flex-col items-center justify-center py-12 text-center px-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" className="mb-3"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
                <p className="text-sm text-gray-500 font-medium mb-1">Tải tài liệu lên</p>
                <p className="text-xs text-gray-400">Hỗ trợ .docx, .pdf, .txt (tối đa 10MB)</p>
              </div>
            )}
            {inputTab === 'url' && (
              <div className="px-5 py-4">
                <input placeholder="Nhập đường dẫn URL (https://...)" className="w-full text-sm text-gray-700 outline-none placeholder-gray-300" />
              </div>
            )}
          </div>
        </div>

        {/* Mode selection */}
        <div className="w-full max-w-2xl">
          <p className="text-sm font-semibold text-gray-700 text-center mb-4">Hãy chọn cách bạn muốn xử lý nội dung nhé!</p>
          <div className="grid grid-cols-3 gap-3">
            {modes.map(m => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`text-left p-4 rounded-2xl border-2 transition-all ${
                  mode === m.id
                    ? 'border-stone-500 bg-stone-50 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    mode === m.id ? 'border-stone-600 bg-stone-600' : 'border-gray-300'
                  }`}>
                    {mode === m.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className={`text-sm font-semibold ${mode === m.id ? 'text-stone-800' : 'text-gray-700'}`}>
                    {m.title}
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed pl-6">{m.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom button */}
      <div className="border-t border-gray-100 px-8 py-4 flex justify-center bg-white">
        <button
          onClick={() => content.trim() && setStep(2)}
          disabled={!content.trim()}
          className="px-16 py-3 bg-stone-700 hover:bg-stone-800 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold rounded-xl transition-colors shadow-sm"
        >
          Tạo dàn ý
        </button>
      </div>
    </div>
  )
}

// ─── Page: Chat history ──────────────────────────────────────────────────────

function HistoryPage({ onOpenConversation, onNewConversation }: {
  onOpenConversation: (conversationId: string) => void
  onNewConversation: () => void
}) {
  const [history] = useState<ChatConversation[]>(() => loadChatHistory())

  const formatDate = (value: string) => {
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return ''

    return new Intl.DateTimeFormat('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date)
  }

  if (history.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="w-14 h-14 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center mb-4">
          <IconHistory />
        </div>
        <h2 className="text-lg font-bold text-gray-800">Chưa có lịch sử trò chuyện</h2>
        <p className="text-sm text-gray-400 mt-2 mb-5">Hãy bắt đầu một cuộc trò chuyện mới với DANAI.</p>
        <button
          type="button"
          onClick={onNewConversation}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-700 hover:bg-stone-800 text-white text-sm font-medium transition-colors"
        >
          <IconPlus />
          Cuộc trò chuyện mới
        </button>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 px-6 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Lịch sử trò chuyện</h1>
            <p className="text-sm text-gray-400 mt-1">Chọn một cuộc trò chuyện để xem và tiếp tục.</p>
          </div>
          <button
            type="button"
            onClick={onNewConversation}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-700 hover:bg-stone-800 text-white text-sm font-medium transition-colors"
          >
            <IconPlus />
            Cuộc trò chuyện mới
          </button>
        </div>

        <div className="space-y-3">
          {history.map(conversation => {
            const lastMessage = conversation.messages[conversation.messages.length - 1]

            return (
              <button
                type="button"
                key={conversation.id}
                onClick={() => onOpenConversation(conversation.id)}
                className="w-full text-left bg-white border border-gray-200 hover:border-stone-300 hover:shadow-sm rounded-xl px-5 py-4 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-stone-600"><IconChat /></span>
                      <h2 className="text-sm font-semibold text-gray-900 truncate">{conversation.title}</h2>
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {lastMessage?.content ?? 'Chưa có nội dung'}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-xs text-gray-400">{formatDate(conversation.updatedAt)}</p>
                    <p className="text-[11px] text-gray-400 mt-1">{conversation.messages.length} tin nhắn</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ─── App root ────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>('chat')
  const [showPromptLib, setShowPromptLib] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)
  const [activeConversationId, setActiveConversationId] = useState(() => {
    return loadChatHistory()[0]?.id ?? createId()
  })

  const startNewConversation = () => {
    setActiveConversationId(createId())
    setShowAdmin(false)
    setPage('chat')
  }

  const openConversation = (conversationId: string) => {
    setActiveConversationId(conversationId)
    setShowAdmin(false)
    setPage('chat')
  }

  const renderPage = () => {
    if (showAdmin) return <AdminPage onBack={() => setShowAdmin(false)} />
    switch (page) {
      case 'chat': return (
        <ChatPage
          key={activeConversationId}
          setShowPromptLib={setShowPromptLib}
          conversationId={activeConversationId}
          onNewConversation={startNewConversation}
        />
      )
      case 'studio': return <StudioPage setPage={setPage} />
      case 'studio-chart': return <ChartPage setPage={setPage} />
      case 'studio-infographic': return <InfographicPage setPage={setPage} />
      case 'studio-slide': return <SlidePage setPage={setPage} />
      case 'notebook': return <NotebookPage setPage={setPage} />
      case 'notebook-workspace': return <NotebookWorkspace setPage={setPage} />
      case 'assistant': return <AssistantPage />
      case 'project': return <ProjectPage />
      case 'tools': return <ToolsPage />
      case 'meeting': return <MeetingPage />
      case 'history': return (
        <HistoryPage
          onOpenConversation={openConversation}
          onNewConversation={startNewConversation}
        />
      )
      default: return (
        <ChatPage
          key={activeConversationId}
          setShowPromptLib={setShowPromptLib}
          conversationId={activeConversationId}
          onNewConversation={startNewConversation}
        />
      )
    }
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      <Sidebar page={page} setPage={p => { setShowAdmin(false); setPage(p) }} setShowPromptLib={setShowPromptLib} onAdmin={() => setShowAdmin(true)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar setShowPromptLib={setShowPromptLib} setPage={setPage} />
        <main className="flex-1 flex min-h-0 overflow-hidden bg-white">
          {renderPage()}
        </main>
      </div>
      {showPromptLib && <PromptLibrary onClose={() => setShowPromptLib(false)} />}
    </div>
  )
}