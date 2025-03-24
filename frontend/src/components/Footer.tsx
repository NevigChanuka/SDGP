import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";



// Button Component
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// Footer Component
function Footer() {

  const navigate = useNavigate();
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 font-bold text-[35px] tracking-tight font-sandaru">iïnkaO ù isákak</h2>
            <p className="mb-6 text-muted-foreground font-CCWelikala">
              kj;u hdj;ald,Sk lsÍï iy iqúfYaIS §ukd i|yd wmf.a mqj;a m;%sldjg iïnkaO jkak'
            </p>        
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold font-sandaru">ine¢</h3>
            <nav className="space-y-2 text-md font-CCWelikala">
              <a className="block transition-colors cursor-pointer hover:text-primary hover:text-emerald-700" onClick={() => navigate('/')}>
                m%Odk msgqj
              </a>
              <a className="block transition-colors cursor-pointer hover:text-primary hover:text-emerald-700" onClick={() => navigate('/grammar-checker')}>
                jHdlrK mÍlaIlh
              </a>
              <a className="block transition-colors cursor-pointer hover:text-primary hover:text-emerald-700" onClick={() => navigate('/similar-words')}>
                iudk mo
              </a>
              <a className="block transition-colors cursor-pointer hover:text-primary hover:text-emerald-700" onClick={() => navigate('/words-set')}>
                jpk iuQyh
              </a>
              <a className="block transition-colors cursor-pointer hover:text-primary hover:text-emerald-700" onClick={() => navigate('/rules')}>
                jHdlrK kS;s
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold font-sandaru">wm wu;kak</h3>
            <address className="space-y-2 text-md not-italic">
              <p>307 / B / 06, Gothatuwawaththa,</p>
              <p>Baddegama, Galle.</p>
              <p>Phone: (077) 123-4567</p>
              <p>Email: vyakarana@gmail.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-2xl font-semibold font-sandaru">wmsj wkq.ukh lrkak</h3>
            <div className="mb-6 flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full cursor-pointer" onClick={() => window.location.href="https://www.facebook.com/profile.php?id=61573618317072"}>
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full cursor-pointer" onClick={() => window.location.href="https://www.instagram.com/vyakarana.site/"}>
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full cursor-pointer" onClick={() => window.location.href="https://www.linkedin.com/company/105934369/admin/dashboard/"}>
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="w-full text-sm text-muted-foreground texxt-center">
            © 2025 Vyakarana කණ්ඩායම. සියලු හිමිකම් ඇවිරිණි.
          </p>
          
        </div>
      </div>
    </footer>
  )
}

export { Button, buttonVariants }
export default Footer