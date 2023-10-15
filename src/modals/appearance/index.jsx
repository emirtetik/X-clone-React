import Logo from "~/layouts/main/leftbar/logo";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import { useAppearance } from "~/store/appearance/hooks";
import classNames from "classnames";
import { colors, fontSizes } from "~/utils/consts";
import { setAppearanceColor, setFontSize } from "~/store/appearance/actions";
import PropTypes from 'prop-types'
export default function AppearanceModal({ close }) {
  const { backgroundColor, color,fontSize } = useAppearance();

  return (
    <div className="w-[600px]  ">
      <h6 className="mt-8 mb-3 text-center text-[23px] leading-7  font-extrabold">
        Görünümü özelleştir
      </h6>
      <div className="p-8 pt-0">
        <p className="text-center text-[var(--color-base)] leading-5 mb-5">
          Bu ayarlar, bu tarayıcıdaki tüm X hesaplarını etkiler
        </p>
        <div className="mx-8 mb-4 ">
          <div className="border border-[var(--background-third)] px-4 flex py-3 gap-3 rounded-2xl">
            <Logo className="" />
            <div className="flex flex-col flex-1">
              <header className="mb-0.5 leading-5 flex items-center">
                <div className="flex items-center font-bold ">
                  X
                  <svg
                    viewBox="0 0 22 22"
                    className="text-[var(--color-primary)] ml-0.5"
                    width={18}
                    height={18}
                  >
                    <path
                      fill="currentColor"
                      d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-center ml-1 text-[var(--color-base)] ">
                  @X . 31d
                </div>
              </header>
              <div className="text-[var(--color-base)] leading-5">
                At the heart of X are short messages called posts — just like
                this one — which can include photos, videos, links, text,
                hashtags, and mentions like{" "}
                <Link
                  to="/"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  @X.
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8">
          <section>
            <h6 className="text-[var(--color-base-secondary)] mb-1 font-bold leading-5 ">
              Yazı tipi boyutu
            </h6>
            <div className="py-2 rounded-2xl bg-[var(--background-secondary)] p-4 flex  items-center gap-5  ">
              <div className="text-[13px]">Aa</div>
              <div className="bg-[var(--color-secondary)] h-1 flex-1 flex  justify-between rounded-full">
                {fontSizes.map((font,i) => (
                  <button 
                   onClick={() => setFontSize(font)}
                   key={i} className="w-8 h-8 rounded-full flex items-center justify-center -top-3.5 relative transition-colors hover:bg-[var(--color-primary)]">
                    <div className={classNames("w-3 h-3 bg-[var(--color-secondary)] rounded-full ", {
                       'w-4 h-4': font === fontSize ,
                       '!bg-[var(--color-primary)]': font <= fontSize,
                    })}></div>
                  </button>
                ))}
              </div>
              <div className="text-[20px]">Aa</div>
            </div>
          </section>

          <section>
            <h6 className="text-[var(--color-base-secondary)] mb-1 font-bold leading-5 ">
              Renk
            </h6>
            <div className="py-2 rounded-2xl bg-[var(--background-secondary)]  flex justify-around items-center  ">
              {colors.map((colorDiv, i) => (
                <button
                  onClick={() => {
                    setAppearanceColor({
                      ...color,
                      ...colorDiv,
                    });
                  }}
                  key={i}
                  className="w-10 h-10 rounded-full bg-[var(--bg)] flex items-center justify-center text-white"
                  style={{ "--bg": colorDiv.primary }}
                >
                  {color.primary === colorDiv.primary && (
                    <div>
                      <svg viewBox="0 0 24 24" width={25}>
                        <path
                          fill="currentColor"
                          d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                        ></path>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h6 className="text-[var(--color-base-secondary)] mb-1 font-bold leading-5 ">
              Arka Plan
            </h6>
            <div className="mb-3 px-3 py-2 grid grid-cols-3 gap-2 bg-[var(--background-secondary)] rounded-2xl   ">
              <button
                className={classNames(
                  "h-16 pr-3 pl-2 bg-white text-[#0f1419] font-bold rounded border border-black/5 group flex items-center",
                  {
                    "!border-[var(--color-primary)] border-2":
                      backgroundColor.name === "light",
                  }
                )}
              >
                <div className="w-10 h-10 rounded-full group-hover:bg-white/10 flex-shrink-0 flex items-center justify-center ">
                  <div
                    className={classNames(
                      "w-5 h-5 rounded-full border-2 border-[#3e4144] ",
                      {
                        "!border-[var(--color-primary)] !bg-[var(--color-primary)] text-white":
                          backgroundColor.name === "light",
                      }
                    )}
                  >
                    {backgroundColor.name === "light" && (
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>
                Varsayılan
              </button>

              <button
                className={classNames(
                  "h-16 pr-3 pl-2 bg-[#15202b] text-[#f2f9f9] font-bold rounded border border-white/10  group flex items-center",
                  {
                    "!border-[var(--color-primary)] border-2":
                      backgroundColor.name === "darklight",
                  }
                )}
              >
                <div className="w-10 h-10 rounded-full group-hover:bg-white/5 flex-shrink-0 flex items-center justify-center ">
                  <div
                    className={classNames(
                      "w-5 h-5 rounded-full border-2 border-[#5c6e7e] ",
                      {
                        "!border-[var(--color-primary)] !bg-[var(--color-primary)] text-white":
                          backgroundColor.name === "darklight",
                      }
                    )}
                  >
                    {backgroundColor.name === "darklight" && (
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>
                Loş
              </button>
              <button
                className={classNames(
                  "h-16 pr-3 pl-2 bg-black gap-1.5  text-[#f2f9f9] font-bold rounded border border-white/10 group flex items-center",
                  {
                    "!border-[var(--color-primary)] border-2":
                      backgroundColor.name === "dark",
                  }
                )}
              >
                <div className="w-10 h-10 rounded-full group-hover:bg-white/10 flex-shrink-0 flex items-center justify-center ">
                  <div
                    className={classNames(
                      "w-5 h-5 rounded-full border-2 border-[#3e4144] ",
                      {
                        "!border-[var(--color-primary)] !bg-[var(--color-primary)] text-white":
                          backgroundColor.name === "dark",
                      }
                    )}
                  >
                    {backgroundColor.name === "dark" && (
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>
                <div className="truncate">Işıklar kapalı</div>
              </button>
            </div>
          </section>
        </div>
        <div className="flex items-center justify-center pt-4">
          <Button onClick={close} >bitti</Button>
        </div>
      </div>
    </div>
  );
}

AppearanceModal.propTypes = {
  close: PropTypes.func
};
