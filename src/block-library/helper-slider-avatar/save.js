export default function save({ attributes }) {

	const {
		slider_avatar_container_extra_css,
		slider_avatar_extra_css,
	} = attributes;

    return (
		<div class={slider_avatar_container_extra_css}>
			<div class={slider_avatar_extra_css} style={"background-image: url()"}></div>
		</div>
    );
}
