import Progress from "../Progress"

const ProgressSection = () => {
    return (
        <>
            <article className="pt-10 flex flex-col gap-5 mb-20">
                <h3>Our team of diverse backgrounds, perspectives and talents is truly what allows us to be great.</h3>
                <div className="flex items-start justify-between pt-5">
                    <Progress percentage={70} value={410} text={'Of our senior leadership are women'} />
                    <Progress percentage={40} value={490} text={'of our employees work remotely, allowing us to be truly global.'} />
                    <Progress percentage={60} value={430} text={'of our team actively participates in environmental or social impact initiatives..'} />
                    <Progress percentage={80} value={360} text={'of our team members incorporate the benefits of art therapy into their daily routines, helping them stay creative, focused, and mentally balanced.'} />
                </div>

            </article>
        </>
    )
}

export default ProgressSection