export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="mt-8 text-center text-sm text-gray-400">&copy; {new Date().getFullYear()} All right reserved.</p>
      </div>
    </footer>
  )
}