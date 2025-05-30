import { Icon } from "@/components/icons";
import { Input } from "./elements/Input";
import Link from "next/link";

export const Navbar = (props: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className="sticky top-0 z-[997]
      w-screen max-w-full h-[8vh] inmd:h-[8svh] p-4
      flex items-center justify-between gap-4
      dark:bg-darker bg-lighter"
      {...props}
    >
      <div className="pl-2 flex gap-4 w-fit">
        <Link href={'/'} className="flex items-center justify-center">
          <Icon.Logo width={99} height={0} className="px-2" />
        </Link>
      </div>
      <Input type="text" placeholder="Pesquisar" />
      <div className="pr-2 flex items-center justify-center gap-8 w-fit">
        <Link href={'/search'} className="navigation-hover font-semibold hover:text-primary transition-colors">Explorar</Link>
        <Link href={'/signin'} className="navigation-hover font-semibold hover:text-primary transition-colors">Entrar</Link>
      </div>
    </nav>
  )
}