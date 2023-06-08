/// <reference types="react-scripts" />

import { UnrealBloomPass } from 'three-stdlib';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            unrealBloomPass: ReactThreeFiber.Node<UnrealBloomPass, typeof UnrealBloomPass>;
        }
    }
}
