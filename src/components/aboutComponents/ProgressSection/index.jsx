import Progress from "../Progress"

const ProgressSection = () => {
    return (
        <>
            <article className="py-10 flex flex-col gap-5 mb-20">
                <h3>Our team of diverse backgrounds, perspectives and talents is truly what allows us to be great.</h3>
                <div className="flex items-center justify-between">
                    <Progress percentage={70} value={410} text={'Of our senior leadership are women'} />
                    <Progress percentage={89} value={360} text={'What percentage of team members work remotely'} />
                    <Progress percentage={32} value={500} text={'of the team identifies as black, indigenous or a person of color'} />
                    <Progress percentage={60} value={430} text={'How many team members are non-European?'} />
                </div>

            </article>
        </>
    )
}

export default ProgressSection