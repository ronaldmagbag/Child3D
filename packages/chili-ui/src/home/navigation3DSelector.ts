// Part of the Chili3d Project, under the AGPL-3.0 License.
// See LICENSE file in the project root for full license information.

import { HTMLProps, option, select } from "chili-controls";
import { Navigation3D } from "chili-core";

export const Navigation3DSelector = (props: HTMLProps<HTMLElement>) => {
    let nav3DTypes: HTMLOptionElement[] = [];
    Navigation3D.types.forEach((nav3DType, index) =>
        nav3DTypes.push(
            option({
                selected: index === Navigation3D.currentIndex(),
                textContent: nav3DType,
            }),
        ),
    );
    return select(
        {
            onchange: (e) => {
                let nav3DType = (e.target as HTMLSelectElement).selectedIndex;
                Navigation3D.changeType(nav3DType);
            },
            ...props,
        },
        ...nav3DTypes,
    );
};
``;
