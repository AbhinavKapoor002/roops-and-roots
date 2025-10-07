import React from 'react'
import MenuItems from "./menuItems";

export const MenuBar = () => {
  return (
    <div>
        <div
            className='flex items-center gap-[20px]'
        >
            {
                MenuItems.map((item, index) => (
                    <button
                        key={index}
                        className='hover:text-paragraph-color'
                        onClick={() => {
                            const targetElement = document.querySelector(item.href)
                            if (targetElement) {
                                targetElement.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                        }}
                    >{item.label}</button>
                ))
            }
        </div>
    </div>
  )
}
