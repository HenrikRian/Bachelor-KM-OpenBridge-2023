<template>
    <svg style="height: 100%"  viewBox="0 0 91 91">
        <g ><svg x="0" y="0" width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="#Watch face/ Small">
<circle cx="45.5" cy="45.5" r="28.1734" stroke="#F0F0F0" stroke-width="8" class="ob-container-instrument-frame-color-stroke"/>
<g>
<g>
<g clip-path="url(#clip0)">
<path d="M68.25 22.75L62.5625 28.4375" stroke="black" stroke-opacity="0.3" class="ob-border-tick-mark-primary-color-stroke"/>
<path d="M28.4375 62.5625L22.75 68.25" stroke="black" stroke-opacity="0.3" class="ob-border-tick-mark-primary-color-stroke"/>
<path d="M22.75 22.75L28.4375 28.4375" stroke="black" stroke-opacity="0.3" class="ob-border-tick-mark-primary-color-stroke"/>
<path d="M62.5625 62.5625L68.25 68.25" stroke="black" stroke-opacity="0.3" class="ob-border-tick-mark-primary-color-stroke"/>
</g>
</g>
<g>
<g>
<g>
<path d="M45.5 69.63L45.5 77.6733" stroke="black" stroke-opacity="0.3" class="ob-element-active-color-stroke"/>
<path d="M13.3266 45.5L21.37 45.5" stroke="black" stroke-opacity="0.3" class="ob-border-tick-mark-primary-color-stroke"/>
<path d="M69.63 45.5L77.6733 45.5" stroke="black" stroke-opacity="0.3" class="ob-border-tick-mark-primary-color-stroke"/>
</g>
</g>
<path d="M45.5 13.3266L48.9829 21.6213H42.0171L45.5 13.3266Z" fill="black" class="ob-element-active-color-fill"/>
</g>
</g>
</g>
<defs>
<clipPath id="clip0">
<rect width="64" height="64" fill="white" transform="translate(45.5) scale(1.00542) rotate(45)"/>
</clipPath>
</defs>
</svg>
</g>
<g :transform="rotateArrowSmall"><svg x="36" y="5.5" width="19" height="80" viewBox="0 0 19 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="#Arrow/ Small">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99993 16L17.963 35.3143C18.0687 35.5707 17.9402 35.8617 17.6759 35.9642C17.615 35.9879 17.5501 36 17.4845 36H2.51536C2.23073 36 2 35.7761 2 35.5C2 35.4364 2.01251 35.3734 2.03686 35.3143L9.99993 16Z" fill="#0000FF" class="ob-instrument-dynamic-color-fill"/>
<rect x="9" y="36" width="2" height="28" fill="#0000FF" class="ob-instrument-dynamic-color-fill"/>
</g>
</svg></g>
    </svg>
</template>

<script>

export default {
        name: 'HdgSmall',
        props: ['heading'],
        computed: {rotateArrowSmall: function () { return `rotate(${this.heading} 45.5 45.5)`}}
        }
</script>