import InfoSection from "../InfoSection"
import infoPic1 from '../../../../public/images/info/1.png'
import infoPic2 from '../../../../public/images/info/2.png'

const RaamonaInfo = () => {
    return (
        <>
            <section className="py-8 px-20">
                <div>
                    <h3 className="text-5xl font-extrabold`">How Does Work Raamona?</h3>
                    <p className="text-justify">
                        aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst
                    </p>
                </div>
                <InfoSection title={'What Is Art Therapy?'} details={'aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst'} pic={infoPic1} />

                <InfoSection title={'About Users'} details={'aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst'} pic={infoPic2} usersDetail={<>
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