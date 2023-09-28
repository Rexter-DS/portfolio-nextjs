import NavMain from '@/components/nav/nav-main.component'

export default function Home() {
  return (
    <main
      className='
        flex
        mx-5
        my-5
        md:my-6
        md:mx-6
        lg:my-8
        lg:mx-[5%]
        xl:mx-[10%]
        2xl:mx-[15%]
      '
    >
      <NavMain></NavMain>
    </main>
  )
}
