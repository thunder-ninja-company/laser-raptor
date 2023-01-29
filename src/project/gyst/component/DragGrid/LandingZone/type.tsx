
export type Props = React.PropsWithChildren<{
    type : 'grid' | 'panel';
    panelId : string | null;
    index : number;
}>;
