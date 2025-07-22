import { cn } from '@/lib/utils'

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: React.ReactNode
}) => {
  return (
    <h1
      className={cn(
        'text-3xl font-bold text-shop_btn_dark_green capitalize tracking-wide font-sans',
        className
      )}
    >
      {children}
    </h1>
  )
}
const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: React.ReactNode
}) => {
  return (
    <h1 className={cn('font-semibold text-gray-900 font-sans', className)}>
      {children}
    </h1>
  )
}

export { Title, SubTitle }
