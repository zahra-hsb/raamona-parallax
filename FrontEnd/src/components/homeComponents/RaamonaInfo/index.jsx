import InfoSection from "../InfoSection"
import infoPic1 from '../../../../public/images/info/1.png'
import infoPic2 from '../../../../public/images/info/2.png'
import { useEffect, useState } from "react"

const RaamonaInfo = () => {

    const [show, setShow] = useState(false)

    function handleScroll(e) {

        if (window.scrollY > 1200) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <>
            <section className="py-8 px-20 overflow-hidden">
                <div className={`${show ? `translate-y-0` : `translate-y-52`} transition-all duration-1000`}>
                    <h3 className="text-5xl font-extrabold`">How Does Work Raamona?</h3>
                    <p className="text-justify">
                        aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst
                    </p>
                </div>
                <InfoSection
                    imageMotion={`${show ? 'translate-x-0' : '-translate-x-52'} transition-all duration-1000`}
                    style={`${show ? 'translate-x-0' : 'translate-x-52'} transition-all duration-1000`}
                    title={'What Is Art Therapy?'}
                    details={'aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst'} pic={infoPic1} />

                <InfoSection
                    imageMotion={`${show ? 'translate-x-0 translate-y-0' : '!-translate-x-52'} transition-all duration-1000`}
                    style={`${show ? 'translate-x-0 translate-y-0' : 'translate-x-52'} transition-all duration-1000`}
                    title={'About Users'}
                    details={'aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst'} pic={infoPic2} usersDetail={<>
                        <h5 className="text-end">+400 k</h5>
                        <h6 className="text-end">Other Users</h6>
                        <h5 className="text-end">+200 k</h5>
                        <h6 className="text-end">Therapist Users</h6>
                        <h5 className="text-end">+100 k</h5>
                        <h6 className="text-end">Artist Users</h6>
                        <h5 className="text-end">+100 k</h5>
                        <h6 className="text-end">Treated Users</h6>
                    </>} />
            </section>
        </>
    )
}

export default RaamonaInfo