import { useForm } from 'react-hook-form';


export const Contact = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container">
            <h1>Kontakt</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="fullname">Navn</label>
                    <input id="fullname" name="fullname" ref={register({required: true, pattern: /^[A-Za-z]+$/i })} />
                    {errors.fullname && errors.fullname.type === 'required' && <span>Du skal udfylde dit navn</span>}
                    {errors.fullname && errors.fullname.type === 'pattern' && <span>Dit navn kan ikke indeholde tal</span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" ref={register({required: true})} />
                    {errors.email && <span>Du skal udfylde din email</span>}
                </div>
                <div>
                    <label htmlFor="message">Besked</label>
                    <textarea id="message" name="message" ref={register}></textarea>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>

        </div>
    )
}