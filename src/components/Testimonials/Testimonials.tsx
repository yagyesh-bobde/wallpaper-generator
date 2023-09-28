import Border from '@/assets/border.png'
import Image from 'next/image'
import styles from './Testimonial.module.css'

export default function Testimonials() {
    const testimonials = [
        {
            id: 1, 
            name: 'Jane Cooper',
            review: 'Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium. Et corrupti saepe quam.'
        },
        {
            id: 2, 
            name: 'Jane Cooper',
            review: 'Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium. Et corrupti saepe quam.'
        },
        {
            id: 3, 
            name: 'Jane Cooper',
            review: 'Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium. Et corrupti saepe quam.'
        },
        {
            id: 4, 
            name: 'Jane Cooper',
            review: 'Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium. Et corrupti saepe quam.'
        },
        {
            id: 5, 
            name: 'Jane Cooper',
            review: 'Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium. Et corrupti saepe quam.'
        },
        {
            id: 6, 
            name: 'Jane Cooper',
            review: 'Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium. Et corrupti saepe quam.'
        },
        {
            id: 7, 
            name: 'Jane Cooper',
            review: 'Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium. Et corrupti saepe quam.'
        },
    ]
    return (
        <div className="h-[100vh] mt-[100px]">
            <h1 className="text-center">
                Testimonials
            </h1>
            <Image src={Border} alt="border" className="mx-auto" />

            <ul className={`${styles["container"]}`}>
                {
                    testimonials.map((testimonial) => (
                        <li key={testimonial.id} className={`flex flex-col items-center justify-center w-[400px] h-[400px] p-5 m-5 bg-white rounded-xl shadow-lg ${styles["item"]}`}>
                            <p className="text-center">
                                {testimonial.review}
                            </p>
                            <h1 className="mt-5">
                                {testimonial.name}
                            </h1>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
