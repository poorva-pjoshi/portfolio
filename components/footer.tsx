export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground">
          <p>Copyright © {currentYear} Poorva Joshi - All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
