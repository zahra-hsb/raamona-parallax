import QuestionContainer from "../../globalComponents/QuestionContainer"


const FaQ = () => {
    const questionsArray = [
        {
            question: 'How do I create AI Generated Art?',
            answer: 'Using NightCafe, you can create AI generated art in a few different ways. Start by clicking the "Create" button in the main menu, then choose a creation method from there. All creation methods are simple to use and will help unleash your creativity to make incredible AI-generated illustrations. We also have power tools not offered by any other AI Art app such as multiple style images, multiple prompts, bulk creation, bulk download and custom seeds - all of which come with no limitations!'
        },
        {
            question: 'What makes NightCafe unique?',
            answer: 'NightCafe is an art generator, but what makes it unique is the community. Join millions of other AI art enthusiasts and publish your creations, like and comment on other creations, hang out in AI art chat rooms and even participate in contests and challenges - all without leaving NightCafe.'
        },
        {
            question: 'Does it cost money to use NightCafe Creator?',
            answer: 'You can use NightCafe Creator to generate unlimited base Stable Diffusion creations for free. A base generation is thumb resolution, short runtime and a single image. More powerful settings (for example higher resolution or photorealistic diffusion) cost credits but everyone gets a free credit top-up every day plus you can earn more credits through participating in our diffusion community! You will only pay if you would like us to print one of your creations or for extended usage of the creator itself.'
        },
        {
            question: 'Does NightCafe Creator have any unique features?',
            answer: 'Yes! We have power tools not offered by any other AI Art app. These include things like multiple style images, bulk creation, bulk download, custom seeds, etc.'
        },
        {
            question: 'What AI art algorithms does NightCafe use?',
            answer: 'NightCafe uses multiple state-of-the-art machine learning algorithms such as Stable Diffusion, DALL-E 2, Neural Style Transfer, VQGAN+CLIP & CLIP Guided Diffusion, and we implement the Real-ESRGAN algorithm that enhances your creations even further!'
        },
    ]
    return (
        <>
            <section className="sm:px-10 px-5 lg:px-20">
                <div className="flex flex-col w-full gap-5">
                    {questionsArray.map(item => (
                        <>
                            <QuestionContainer question={item.question} answer={item.answer} />
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

export default FaQ