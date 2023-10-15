import Button from "~/components/Button"
export default function Premium(){
    return(
        <div className="bg-[var(--background-secondary)] rounded-2xl mb-4 border border-[var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5 text-[var(--color-base)]">
          <h6 className="text-xl font-extrabold leading-6">Premiuma abone ol</h6>
          <p className="leading-5 text-[15px] font-bold">Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
          <div className="self-start">
          <Button>abone ol</Button>
          </div>
        </div>
    )
}