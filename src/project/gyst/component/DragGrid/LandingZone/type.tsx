export type Props = React.PropsWithChildren<{
    panelId : string | null;
    index   : number;
    type    : 'grid' | 'panel';
}>;
